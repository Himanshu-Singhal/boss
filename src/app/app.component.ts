import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'boss';
  isAuthenticated: Boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAuthStatus();
  }

  getAuthStatus(): void {
    this.authService.getIsAuthenticated()
    .subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
      if (isAuthenticated) {
        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['/sign-in'])
      }
    })
  }
}
