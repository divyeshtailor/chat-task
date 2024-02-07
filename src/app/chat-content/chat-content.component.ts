import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { ChatBoardFacade } from "../+state/chat-board.facade";
import { SwiperComponent } from "swiper/angular";
import { FormControl, Validators, UntypedFormGroup } from "@angular/forms";

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: ['./chat-content.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChatContentComponent implements OnInit, OnChanges{
  @Input() indexNumber = 0;
  @Input() defaultRecords: any;
  @ViewChild(SwiperComponent) swiper?: SwiperComponent;

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
  selectedFile: any;
  filesSelected: boolean = false;
  constructor(private chatBoardFacade: ChatBoardFacade) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges | any): void {
    if(changes.indexNumber?.currentValue !== changes.indexNumber?.previousValue){
      this.showEmojiPicker = false;
      this.indexNumber = changes.indexNumber?.currentValue;
      if(this.indexNumber) {
        this.swipeSlideNext();
      }
    }
  }

  swipeSlideNext() {
    if (this.swiper && this.swiper.swiperRef) {
      this.swiper.swiperRef.slideTo(this.indexNumber);
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
      if(this.filesSelected) {
        const imageFile = `<img src="${this.selectedFile}" />`
        this.messageFormGroup.controls['message' + index].setValue(imageFile);
        this.chatBoardFacade.addMessage(index, this.messageFormGroup.controls[controlName].value, 'sent');
        this.filesSelected = false;
      }
      else {
        this.chatBoardFacade.addMessage(index, this.messageFormGroup.controls[controlName].value, 'sent');
      }
      this.messageFormGroup.controls[controlName].setValue('');
    }
  }

  onFileSelected(event: any, selectedIndex: string): void {
    // Handle the selected file
    const file = event.target.files[0];
    let imageFile = '';
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // Store the file content as a data URL
        this.selectedFile = e.target?.result as string;
        imageFile = `<img src="${this.selectedFile}" />`;
        debugger
        this.messageFormGroup.controls[selectedIndex].setValue(file?.name);
        this.filesSelected = true;
      };
      // Read the file as a data URL (Base64 format)
      reader.readAsDataURL(file);
    }
  }
}
