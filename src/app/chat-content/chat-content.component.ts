import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {ChatBoardFacade} from "../+state/chat-board.facade";
import {SwiperComponent} from "swiper/angular";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: ['./chat-content.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChatContentComponent implements OnInit, OnChanges{
  @Input() indexNumber = 0;
  @Input() defaultRecords: any;
  @Output() indexNumberChange = new EventEmitter();
  @ViewChild('mySwiper', { static: false }) mySwiper?: SwiperComponent;

  navigation = false;
  scrollbar: any = false;
  message = new FormControl('', [Validators.required]);
  showEmojiPicker = false;
  perLineEmoji = 6;
  constructor(private chatBoardFacade: ChatBoardFacade) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges | any): void {
    if(changes.indexNumber?.currentValue !== changes.indexNumber?.previousValue){
      this.showEmojiPicker = false;
      this.indexNumber = changes.indexNumber?.currentValue;
    }
  }

  swipeHeaderRoom() {
    this.showEmojiPicker = false;
  }

  toggleEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event: any) {
    const text = `${this.message.value ? this.message.value : ''}${event.emoji.native}`;
    this.message.setValue(text);
    this.showEmojiPicker = false;
  }

  addMessage(index: number){
    if (this.message.valid) {
      this.chatBoardFacade.addMessage(index, this.message.value, 'sent');
      this.message.setValue('');
    }
  }
}
