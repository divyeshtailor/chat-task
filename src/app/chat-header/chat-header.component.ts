import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { SwiperComponent } from "swiper/angular";

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.css']
})
export class ChatHeaderComponent implements OnChanges{
  slides = Array.from({ length: 5 }).map((el, index) => `U`);
  slideMy = [];
  slidesEx = ['first', 'second', 'third', 'fourth', 'fifth'];
  navigation = false;
  breakpoints = {
    320: { slidesPerView: 5, spaceBetween: 10, centeredSlides: true },
    640: { slidesPerView: 5, spaceBetween: 10, centeredSlides: true },
    768: { slidesPerView: 5, spaceBetween: 10, centeredSlides: true },
    1024: { slidesPerView: 5, spaceBetween: 10, centeredSlides: true },
  };
  scrollbar: any = false;
  show: boolean = true;
  @Input() indexNumber = 0;
  @Input() defaultRecords: any;
  @Output() indexNumberChange = new EventEmitter();
  @ViewChild(SwiperComponent) swiper?: SwiperComponent;

  constructor() {}

  toggleNavigation() {
    this.navigation = !this.navigation;
  }

  swipeHeaderRoom(indexNumber: number) {
    this.indexNumberChange.emit( indexNumber);
    this.swipeSlideNext();
  }

  ngOnChanges(changes: SimpleChanges | any): void {
    if(changes.indexNumber?.currentValue !== changes.indexNumber?.previousValue){
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
}
