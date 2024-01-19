import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { ChatBoardFacade } from "../+state/chat-board.facade";

@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.css']
})
export class ChatScreenComponent implements OnInit {
  indexNumber = 0;

  constructor(private cd: ChangeDetectorRef, private ngZone: NgZone, private chatBoardFacade: ChatBoardFacade) {
  }

  ngOnInit(): void {
    this.chatBoardFacade.changeTestData();
  }

  indexNumberChange(event: number){
    this.indexNumber = event;
    console.log(this.indexNumber)
  }
}
