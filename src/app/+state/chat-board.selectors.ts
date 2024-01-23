import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ChatBoardState, featureKey} from "./chat-board.reducer";

const getFeatureState = createFeatureSelector<ChatBoardState>(featureKey);

const getDefaultRecord = createSelector(getFeatureState, (state) => state.defaultRecord);

export const fromChatBoard = {
  getDefaultRecord
};
