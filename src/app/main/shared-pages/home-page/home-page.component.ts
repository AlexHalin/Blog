import {AfterContentInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Post} from "../../../shared/interfaces";
import {PostsService} from "../../../shared/posts.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterContentInit, OnDestroy {

  posts$: Observable<Post[]>;

  // dataSource: any;
  // users: any[];

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private postsService: PostsService,
  ) {
  }

  ngOnInit() {
    this.posts$ = this.postsService.getAll();

    // this.postsService.getAll().subscribe(results => {
    //   this.users = results;
    //   this.dataSource = new MatTableDataSource(this.users);
    //   this.dataSource.paginator = this.paginator;
    // });
  }

  ngAfterContentInit() {
  //   this.dataSource = new MatTableDataSource(this.users);
  //   this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy() {
    // if (this.dataSource) {
    //   this.dataSource.disconnect();
    // }
  }
}
