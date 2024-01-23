import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ProgressBarModule } from "nextsapien-component-lib";
import { ChatScreenComponent } from './chat-screen/chat-screen.component';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { ChatContentComponent } from './chat-content/chat-content.component';
import {SwiperModule} from "swiper/angular";
import {StoreFeatureModule, StoreModule, StoreRootModule} from "@ngrx/store";
import {featureKey, reducer} from "./+state/chat-board.reducer";
import {StoreDevtools, StoreDevtoolsModule} from "@ngrx/store-devtools";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ChatScreenComponent,
    ChatHeaderComponent,
    ChatContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(featureKey, reducer),
    StoreDevtoolsModule.instrument(),
    ReactiveFormsModule
    // ProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
