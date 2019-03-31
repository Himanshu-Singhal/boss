import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SpendingComponent } from './spending/spending.component';
import { HomeComponent } from './home/home.component';
import { LearnComponent } from './learn/learn.component';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'spending',
    component: SpendingComponent,
  },
  {
    path: 'learn',
    component: LearnComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
