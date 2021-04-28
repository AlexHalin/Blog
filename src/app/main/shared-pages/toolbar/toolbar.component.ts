import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../auth/services/auth.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  login = localStorage.getItem('login')
  date: Date

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    this.interval()
  }

  interval() {
    setInterval(() => {
      this.date = new Date()
    }, 1);

  }

  logout() {
    localStorage.clear();
    this.auth.logout()
  }
}
