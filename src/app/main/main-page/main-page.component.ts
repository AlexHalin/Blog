import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from "../../shared/interfaces";
import {Subscription} from "rxjs";
import {PostsService} from "../../shared/posts.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }


}
