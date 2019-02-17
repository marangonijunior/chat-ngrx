import { Injectable } from '@angular/core';
import { Chat } from './chat';
@Injectable()

export class ChatService {

    public chats: Chat[] = [];

    constructor() {}

    public addChat(chat: Chat): ChatService {
        this.chats.push(chat);
        return this;
    }

    public getAll(): Chat[] {
        return this.chats.filter(todo => todo);
    }

}