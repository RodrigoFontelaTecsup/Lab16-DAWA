import { Component } from '@angular/core';
import { LogoutService } from './logout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(private logoutService: LogoutService) { }

  logout() {
    this.logoutService.logout();
  }
}
