import { ChatService } from './../service/chat/chat.service';
import { Component, OnInit } from '@angular/core';



// import * as SockJS from 'sockjs-client';

import { FormChat } from '../Interface/FormChat';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public formChat= new FormChat();
  greeting: any;
  public name: string="";
  constructor(private chatService: ChatService) {}
   
  deconnect(){
    localStorage.removeItem('user');
  

    console.log(localStorage.getItem('user')+"efa nifafa");
    
  }
  // connect(){
  //   this.chatService._connect();
  // }
  // disconnect(){
  //   this.chatService._disconnect();
  // }

  // sendMessage(){
  //   this.chatService._send(this.name);
  // }

  // handleMessage(message:any){
  //   this.greeting = message;
  // }
  
    ngOnInit(): void {
    }
}
