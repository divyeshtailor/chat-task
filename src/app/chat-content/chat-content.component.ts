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
import {FormControl, FormGroup, Validators, UntypedFormGroup} from "@angular/forms";

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: ['./chat-content.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChatContentComponent implements OnInit, OnChanges{
  @Input() indexNumber = 0;
  @Input() defaultRecords: any;
  @ViewChild('mySwiper', { static: false }) mySwiper?: SwiperComponent;

  navigation = false;
  scrollbar: any = false;
  messageFormGroup = new UntypedFormGroup({
    message0 : new FormControl('', [Validators.required]),
    message1 : new FormControl('', [Validators.required]),
    message2 : new FormControl('', [Validators.required]),
    message3 : new FormControl('', [Validators.required]),
    message4 : new FormControl('', [Validators.required])
  });
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
    const controlName = 'message' + this.indexNumber;
    const text = `${this.messageFormGroup.controls[controlName].value ? this.messageFormGroup.controls[controlName].value : ''}${event.emoji.native}`;
    this.messageFormGroup.controls[controlName].setValue(text);
    this.showEmojiPicker = false;
  }

  addMessage(index: number, controlName: string){
    if (this.messageFormGroup.controls[controlName].valid) {
      this.chatBoardFacade.addMessage(index, this.messageFormGroup.controls[controlName].value, 'sent');
      this.messageFormGroup.controls[controlName].setValue('');
    }
  }
}
