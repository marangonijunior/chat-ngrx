import { tokenNotExpired } from 'angular2-jwt';

export class AuthService {
  token: string;

  loggedIn(){
    if(localStorage.getItem('token') != ''){
      //return tokenNotExpired();
      return true;
    }else{
      return false;
    }

  }

  setToken(item){
    localStorage.setItem('token', item );
  }

}
