import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Post} from "../../../shared/interfaces";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() post: Post;

  constructor() {
  }

  ngOnInit(): void {
  }
}
