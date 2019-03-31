import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private isAuthenticated = new BehaviorSubject(false);

  readonly isAuthenticated$ = this.isAuthenticated.asObservable();

  signIn(): void {
    this.isAuthenticated.next(true);
  }

  signOut(): void {
    this.isAuthenticated.next(false);
  }

  getIsAuthenticated(): Observable<Boolean> {
    return this.isAuthenticated$;
  }
}
