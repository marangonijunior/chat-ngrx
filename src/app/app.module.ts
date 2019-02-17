import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import {  MatListModule,
          MatExpansionModule,
          MatGridListModule,
          MatInputModule,
          MatIconModule,
          MatToolbarModule,
          MatTooltipModule,
          MatButtonModule,
          MatCheckboxModule,
          MatSelectModule,
          MatSnackBarModule,
          MatDialogModule,
          MatChipsModule
        } from '@angular/material';

import { ServiceJson } from './service/service-json';
import { RequestService } from './service/request/request.service';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { LoginComponent }   from './login/login.component';
import { ChatComponent }   from './chat/chat.component';

import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { chat } from './service/redux/chat.redux';

import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent
  ],
  entryComponents: [],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatInputModule,
    MatGridListModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatDialogModule,
    MatChipsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [
    AuthGuard,
    AuthService,
    RequestService,
    ServiceJson,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
