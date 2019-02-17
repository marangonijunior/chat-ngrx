import { Component, OnInit , Inject, Compiler} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

import { MatToolbarModule, MatSnackBar, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { ServiceJson } from '../service/service-json';
import { ChatService } from '../service/redux/chat.service';
import { Chat } from '../service/redux/chat';


@Component({
    selector: 'chat-ngrx',
    styleUrls:['chat.component.css'],
    templateUrl: 'chat.component.html',
    providers: [ChatService]
})

export class ChatComponent implements OnInit{

  user:any;
  inputChat:any;
  newChat: Chat = new Chat();
  listChatOther:Array<any> = [
    "Take easy",
    "Maybe be necessary",
    "I'm in love Redux and you?",
    "zzzz"
  ];


  constructor(
    private router : Router,
    public authService: AuthService,
    public snackBar: MatSnackBar,
    private serviceJson : ServiceJson,
    public chatDataService:ChatService
  ) {
    this.user = localStorage.getItem('user')
  }


  ngOnInit(){
    this.addOther();
  }

  sendMsg(){
    if(this.newChat.msg != ''){
      this.newChat.avatar = "https://i.imgur.com/HYcn9xO.png";
      this.newChat.class = "self";

      this.chatDataService.addChat(this.newChat);
      this.newChat = new Chat();

      this.addOther();
    }else{
      this.openSnackBar("Please insert your msg");
    }
  }


  public get completeChats(): Array<Chat> {
    return this.chatDataService.getAll();
  }

  addOther(){
    let randomIndex = Math.floor(Math.random() * this.listChatOther.length);
    let chatOther = new Chat();
    chatOther.avatar = "https://i.imgur.com/DY6gND0.png";
    chatOther.class = "other";
    chatOther.msg = this.listChatOther[randomIndex];
    this.chatDataService.addChat(chatOther);
  }

  logout(){
    this.router.navigateByUrl('/login');
  }

  openSnackBar(msg:any) {
    this.snackBar.open(msg, 'OK', {
        duration: 3000,horizontalPosition:"right"
    });
  }


}
