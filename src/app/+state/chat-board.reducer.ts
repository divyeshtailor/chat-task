import { Action, createReducer } from '@ngrx/store';
import {chatBoardActions} from "./chat-board.actions";
import {immerOn} from "ngrx-immer/store";

export interface defaultRecord {
  name: string,
  url: string,
  messages: Array<{ message: string, stats: string }>
}
export interface ChatBoardState {
  initialState: boolean
  defaultRecord: any
}

export const featureKey = 'chat-board';

const initialState: ChatBoardState = {
  initialState: true,
  defaultRecord: null
};

export const chatBoardReducer = createReducer<ChatBoardState>(
  initialState,
  immerOn(chatBoardActions.defaultRecord, (state, { defaultRecord }) => {
    state.defaultRecord = defaultRecord;
  }),
  immerOn(chatBoardActions.addMessage, (state, { index, message, status }) => {
    state.defaultRecord = addMessage( state.defaultRecord,  index, message, status);
  }),
);

const addMessage = (defaultRecord: any, index: number, message: string, status: string) => {
  defaultRecord = defaultRecord.map((record: any, i: number) => {
    if(index == i){
      return {
        ...record,
        messages: [...record.messages, {
          message,
          status
        }]
      }
    } else {
      return record
    }
  });
  return defaultRecord
};

export function reducer(state: ChatBoardState | undefined, action: Action) {
  return chatBoardReducer(state, action);
}
