import { Component } from '@angular/core';
import { LogoutService } from '../logout.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private logoutService: LogoutService) { }

  logout() {
    this.logoutService.logout();
  }
}
