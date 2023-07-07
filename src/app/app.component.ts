import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-crud';

  constructor(
    private userService: UserService
  ) {
  }

  public get formActive(): boolean {
    return this.userService.formActive;
  }

}
