import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GetUser, Post} from './interfaces';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostsService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Post[]> {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`)
      .pipe(map((response: { [key: string]: any }) => {
        return Object
          .keys(response)
          .map(key => ({
            ...response[key],
            id: key
          }));
      }));
  }

  getById(id: string): Observable<Post> {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${+id + 1}`)
      .pipe(map((post: Post) => {
        return {
          ...post,
          id
        };
      }));
  }

  getUser(id: string): Observable<GetUser[]> {
    return this.http.get(` https://jsonplaceholder.typicode.com/users/${+id + 1}`)
      .pipe(map((response: { [key: string]: any }) => {
        return Object
          .keys(response)
          .map(key => ({
            ...response[key],
            id: key
          }));

      }));
  }
}
