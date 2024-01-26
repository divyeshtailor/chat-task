import { createAction, props } from '@ngrx/store';

const defaultRecord = createAction('[chat-board] Default Record', props<{ defaultRecord: any }>());

const addMessage = createAction('[chat-board] Add Message', props<{ index: number; message: string | null; status: string }>());

export const chatBoardActions = {
  defaultRecord,
  addMessage
};
