import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { scan } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {
  // data='Tamil';
  messages:Observable<Message[]>;
  formValue: string;
  data='Tamil';
  constructor(public chat:ChatService) {
    this.formValue='';
  }
  ngOnInit(): void {
    this.messages=this.chat.conversation.asObservable();
    // .scan((acc,val)=>acc.concat(val));
  }
  sendMessage(){
    // debugger;
    // alert('Test');
    console.log(this.formValue);
    this.chat.converse(this.formValue);
    this.formValue='';
  }
}
