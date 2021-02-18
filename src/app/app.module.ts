import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { FullUserComponent } from './components/full-user/full-user.component';
import { PostComponent } from './components/post/post.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import {CanActivateService} from './services/can-activate.service';
import {PrefetchUserService} from './services/prefetch-user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FullUserComponent,
    PostComponent,
    AllUsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'users', component: AllUsersComponent, resolve: {xxx: PrefetchUserService}, canActivate: [CanActivateService],
        children: [
      {path: 'user/:id', component: FullUserComponent}
        ]},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
