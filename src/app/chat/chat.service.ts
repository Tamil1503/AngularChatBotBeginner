import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
// import { ApiAiClient } from 'api-ai-javascript';

export class Message{
  constructor(public content: string,public sentBy:string){}
}
@Injectable()
export class ChatService {
  // readonly token=environment.dialogflow.angularBot;
  // readonly client = new ApiAiClient({accessToken:this.token});
  conversation= new BehaviorSubject<Message[]>([]);
  constructor() { }
  letstalk(){
    return "Test";
    //this.client.textRequest('Who are you!').then(res => console.log(res));
  }
  update(msg:Message){
    this.conversation.next([msg]);
  }
  converse(msg:string){
    const userMessage= new Message(msg,'user');
    this.update(userMessage);
    return '';
  }
}
