import { Component, OnInit } from '@angular/core';
import { MatToolbarModule,MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { RequestService } from '../service/request/request.service';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'login',
    styleUrls:['login.component.css'],
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit{

    islogin = true;

    name:any;

    constructor(
      private router : Router,
      private requestService: RequestService,
      public authService: AuthService,
      public snackBar: MatSnackBar
    ) {}

    ngOnInit(){
      localStorage.setItem('token', '');
    }

    goLogin(){

      if(this.name){
  
        //Just example, I don't have a server to generate a token.
        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkNoYXQgbmdyeCIsImlhdCI6MTUxNjIzOTAyMn0.H4iY0yUP45C-EGM30eIG9yop1t3PgdvG1Vbxc1-5qBQ';
        this.authService.setToken(token);
        localStorage.setItem('user', this.name );
        
        //Routing to chat after token inserted.
        this.router.navigateByUrl('/chat');

      }else{
        this.openSnackBar("You need insert your name.");
      }

      

    }

    openSnackBar(msg:any) {
      this.snackBar.open(msg, 'Close', {
          duration: 3000,horizontalPosition:"right"
      });
    }

}
