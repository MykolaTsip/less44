import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users: User[];

  // constructor(private userService: UserService) {
    // userService.users()
    //   .subscribe(data => this.users = data);
  // }

  constructor(private activatedRoute: ActivatedRoute) {
  activatedRoute.data
    .subscribe(value => {
      this.users = value.xxx;
      console.log(value);
    })
  }

  ngOnInit(): void {
  }

}
