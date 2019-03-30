import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalsProgressComponent } from './goals-progress/goals-progress.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { GoalIdeasComponent } from './goal-ideas/goal-ideas.component';
import { SpendingComponent } from './spending/spending.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalsProgressComponent,
    NavbarComponent,
    HeaderComponent,
    GoalIdeasComponent,
    SpendingComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
