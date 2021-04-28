import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {GetUser, Post} from "../../../shared/interfaces";
import {ActivatedRoute, Params} from "@angular/router";
import {PostsService} from "../../../shared/posts.service";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-post-details-page',
  templateUrl: './post-details-page.component.html',
  styleUrls: ['./post-details-page.component.scss']
})
export class PostDetailsPageComponent implements OnInit {

  post$: Observable<Post>;
  user$: Observable<GetUser>

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {
  }

  ngOnInit() {
    this.post$ = this.route.params
      .pipe(switchMap((params: Params) => {
        return this.postsService.getById(params['id']);
      }));

    // this.user$ = this.route.params
    //   .pipe(switchMap((params: Params) => {
    //     return this.postsService.getUser(params['id']);
    //   }));
    //
    // console.log(this.user$)
  }

}
