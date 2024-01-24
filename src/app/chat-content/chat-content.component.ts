import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges, ViewChild
} from '@angular/core';
import { ChatBoardFacade } from "../+state/chat-board.facade";
import { SwiperComponent } from "swiper/angular";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: ['./chat-content.component.css']
})
export class ChatContentComponent implements OnInit, OnChanges{
  @Input() indexNumber = 0;
  @Input() defaultRecords: any;
  @Output() indexNumberChange = new EventEmitter();
  @ViewChild('mySwiper', { static: false }) mySwiper?: SwiperComponent;

  navigation = false;
  scrollbar: any = false;
  message = new FormControl();
  constructor(private chatBoardFacade: ChatBoardFacade) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges | any): void {
    if(changes.indexNumber?.currentValue !== changes.indexNumber?.previousValue){
      this.indexNumber = changes.indexNumber?.currentValue;
    }
  }

  swipeHeaderRoom(indexNumber: number) {
    this.indexNumberChange.emit( indexNumber);
  }

  addMessage(index: number){
    this.chatBoardFacade.addMessage( index, this.message.value, 'sent' );
    this.message.setValue('')
  }
}
