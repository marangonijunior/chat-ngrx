import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';
import { CanActivate, CanDeactivate } from '@angular/router';
import { AuthService } from './auth.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ChatComponent }   from '../chat/chat.component';


@Injectable()
export class AuthGuard implements CanActivate, CanDeactivate<ChatComponent>{

  constructor(
    private auth: AuthService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  canActivate() {
    if(this.auth.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }

  canDeactivate(component: ChatComponent): boolean | Observable<boolean> {
    // if there are no pending changes, just allow deactivation; else confirm first
    return true ?
      true :
      // NOTE: this warning message will only be shown when navigating elsewhere within your angular app;
      // when navigating away from your angular app, the browser will show a generic warning message
      // see http://stackoverflow.com/a/42207299/7307355
      confirm('ATENÇÃO: Você possui modificações não salvas e irá perder caso saia sem salvar!');



  }

}
