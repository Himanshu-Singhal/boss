import { Component, Input } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  constructor(private authService: AuthService) { }

  @Input() email: String;
  @Input() password: String;
  @Input() rememberMe: Boolean;

  signIn() {
    this.authService.signIn();
  }

}
