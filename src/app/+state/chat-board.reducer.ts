import { Action, createReducer } from '@ngrx/store';
import {chatBoardActions} from "./chat-board.actions";
import {immerOn} from "ngrx-immer/store";

export interface ChatBoardState {
  initialState: boolean
}

export const featureKey = 'chat-board';

const initialState: ChatBoardState = {
  initialState: true
};

export const chatBoardReducer = createReducer<ChatBoardState>(
  initialState,
  immerOn(chatBoardActions.testStore, (state) => {
    state.initialState = false;
  }),
);

export function reducer(state: ChatBoardState | undefined, action: Action) {
  return chatBoardReducer(state, action);
}
