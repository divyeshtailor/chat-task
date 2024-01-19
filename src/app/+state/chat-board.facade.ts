import {Injectable} from "@angular/core";
import {ChatBoardState} from "./chat-board.reducer";
import { Store } from '@ngrx/store';
import {chatBoardActions} from "./chat-board.actions";

@Injectable({
  providedIn: 'root'
})

export class ChatBoardFacade {

  constructor(private store: Store<ChatBoardState>) {
  }

  changeTestData() {
    this.store.dispatch(chatBoardActions.testStore());
  }

}
