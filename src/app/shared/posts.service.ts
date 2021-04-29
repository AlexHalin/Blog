import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GetUser, Post} from './interfaces';

@Injectable({providedIn: 'root'})
export class PostsService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`)
  }

  getById(id: string): Observable<Post> {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${+id + 1}`)
  }

  getUser(id: string): Observable<GetUser> {
    return this.http.get<GetUser>(`https://jsonplaceholder.typicode.com/users/${+id + 1}`)
  }

  getComments(id: string): Observable<GetUser[]> {
    return this.http.get<GetUser[]>(`https://jsonplaceholder.typicode.com/posts/${+id + 1}/comments`)

  }
}
