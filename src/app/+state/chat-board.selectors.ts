import {createFeatureSelector} from "@ngrx/store";
import {ChatBoardState, featureKey} from "./chat-board.reducer";

const getFeatureState = createFeatureSelector<ChatBoardState>(featureKey);
