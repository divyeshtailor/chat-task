import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges, ViewChild
} from '@angular/core';
import {ChatBoardFacade} from "../+state/chat-board.facade";
import {SwiperComponent} from "swiper/angular";

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: ['./chat-content.component.css']
})
export class ChatContentComponent implements OnInit, OnChanges{
  @Input() indexNumber = 0;
  @Output() indexNumberChange = new EventEmitter();
  @ViewChild('mySwiper', { static: false }) mySwiper?: SwiperComponent;

  slides = Array.from({ length: 5 }).map((el, index) => `Slide ${index}`);
  navigation = false;
  scrollbar: any = false;
  show: boolean = true;
  // breakpoints = {
  //   320: { slidesPerView: "auto", spaceBetween: 5, centeredSlides: true },
  //   640: { slidesPerView: "auto", spaceBetween: 5, centeredSlides: true },
  //   768: { slidesPerView: "auto", spaceBetween: 5, centeredSlides: true },
  //   1024: { slidesPerView: "auto", spaceBetween: 5, centeredSlides: true },
  // };

  constructor(private chatBoardFacade: ChatBoardFacade) {}

  ngOnInit(): void {
    this.chatBoardFacade.changeTestData();
  }

  ngOnChanges(changes: SimpleChanges | any): void {
    if(changes.indexNumber?.currentValue !== changes.indexNumber?.previousValue){
      this.indexNumber = changes.indexNumber?.currentValue;
    }
  }

  swipeHeaderRoom(indexNumber: number) {
    this.indexNumberChange.emit( indexNumber);
  }
}