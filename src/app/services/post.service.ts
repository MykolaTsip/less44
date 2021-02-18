import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

postsOfUser(userId): Observable<Post[]> {
   return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
}

}
