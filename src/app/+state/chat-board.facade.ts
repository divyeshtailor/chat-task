import {Injectable} from "@angular/core";
import {ChatBoardState} from "./chat-board.reducer";
import { Store } from '@ngrx/store';
import {chatBoardActions} from "./chat-board.actions";
import {fromChatBoard} from "./chat-board.selectors";

@Injectable({
  providedIn: 'root'
})

export class ChatBoardFacade {

  constructor(private store: Store<ChatBoardState>) {
  }

  getDefaultRecord$ = this.store.select(fromChatBoard.getDefaultRecord);

  setDefaultData(defaultRecord: any) {
    this.store.dispatch(chatBoardActions.defaultRecord({ defaultRecord }));
  }

  addMessage(index: number, message: string | null, status: string) {
    this.store.dispatch(chatBoardActions.addMessage({ index, message, status }));
  }

}
