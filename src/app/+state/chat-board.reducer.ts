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
  defaultRecord: [
    {
      id: 1,
      name: 'U1',
      url: './assets/img1.png',
      messages: [
        {message: ' Hi Caky, how are you? I saw on the app that we’ve crossed paths several times this week', status: 'received'}
      ]
    },
    {
      id: 2,
      name: 'U2',
      url: './assets/img2.png',
      messages: [
        {message: ' Hi Deny, how are you? I saw on the app that we’ve crossed paths several times this week', status: 'received'}
      ]
    },
    {
      id: 3,
      name: 'U3',
      url: './assets/img3.png',
      messages: [
        {message: ' Hi Paps, how are you? I saw on the app that we’ve crossed paths several times this week', status: 'received'}
      ]
    },
    {
      id: 4,
      name: 'U4',
      url: './assets/img4.png',
      messages: [
        {message: ' Hi Jake, how are you? I saw on the app that we’ve crossed paths several times this week', status: 'received'}
      ]
    },
    {
      id: 5,
      name: 'U5',
      url: 'https://picsum.photos/100',
      messages: [
        {message: ' Hi Siri, how are you? I saw on the app that we’ve crossed paths several times this week', status: 'received'}
      ],
    }
  ]
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

const addMessage = (defaultRecord: any, index: number, message: string | null, status: string) => {
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
