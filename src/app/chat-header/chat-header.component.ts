import {ChangeDetectorRef, Component, Input, NgZone, Output, EventEmitter} from '@angular/core';
import {ChatBoardFacade} from "../+state/chat-board.facade";

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.css']
})
export class ChatHeaderComponent {
  slides = Array.from({ length: 5 }).map((el, index) => `U`);
  slideMy = [
    {
      name: 'U1', url: './assets/img1.png',
      messages: [
        {message: ' Hi Jake, how are you? I saw on the app that we’ve crossed paths several times this week', status: 'sent'},
        {message: ' Hi Jake, how are you? I saw on the app that we’ve crossed paths several times this week', status: 'received'}
       ]
    },
    { name: 'U2', url: './assets/img2.png',
      messages: [
        {message: ' Hi Jake, how are you? I saw on the app that we’ve crossed paths several times this week', status: 'sent'},
        {message: ' Hi Jake, how are you? I saw on the app that we’ve crossed paths several times this week', status: 'received'}
      ]
    },
    { name: 'U3', url: './assets/img3.png',
      messages: [
        {message: ' Hi Jake, how are you? I saw on the app that we’ve crossed paths several times this week', status: 'sent'},
        {message: ' Hi Jake, how are you? I saw on the app that we’ve crossed paths several times this week', status: 'received'}
      ]
    },
    { name: 'U4', url: './assets/img4.png',
      messages: [
        {message: ' Hi Jake, how are you? I saw on the app that we’ve crossed paths several times this week', status: 'sent'},
        {message: ' Hi Jake, how are you? I saw on the app that we’ve crossed paths several times this week', status: 'received'}
      ]
    },
    { name: 'U5', url: 'https://picsum.photos/100',
      messages: [
        {message: ' Hi Jake, how are you? I saw on the app that we’ve crossed paths several times this week', status: 'sent'},
        {message: ' Hi Jake, how are you? I saw on the app that we’ve crossed paths several times this week', status: 'received'}
      ],
    }
  ];
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

  constructor(private cd: ChangeDetectorRef, private ngZone: NgZone, private chatBoardFacade: ChatBoardFacade) {}

  ngOnInit(): void {
    this.chatBoardFacade.setDefaultData(this.slideMy);
  }

  toggleNavigation() {
    this.navigation = !this.navigation;
  }

  swipeHeaderRoom(indexNumber: number) {
    this.indexNumberChange.emit( indexNumber);
  }


}
