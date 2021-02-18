import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/User';
import {Post} from '../../models/Post';
import {PostService} from '../../services/post.service';
import {CommentService} from '../../services/comment.service';


@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent implements OnInit {

  // user: User;

  usr: User;

  posts: Post[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private postService: PostService, private commentService: CommentService) {
  // this.user = router.getCurrentNavigation().extras.state.user;

  activatedRoute.params.subscribe(value => {
    this.usr = history.state.user;
    postService.postsOfUser(this.usr.id)
      .subscribe(data => {
        this.posts = data;
        for (const post of this.posts) {
          commentService.postOfComments(post.id)
            .subscribe(comment => console.log(comment));
        }
      });


  });


  }

  ngOnInit(): void {
  }

}
