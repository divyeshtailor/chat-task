import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatScreenComponent } from './chat-screen/chat-screen.component';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { ChatContentComponent } from './chat-content/chat-content.component';
import { SwiperModule } from "swiper/angular";
import { StoreModule} from "@ngrx/store";
import { featureKey, reducer } from "./+state/chat-board.reducer";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import {CircleProgressModule, NextsapienComponentLibModule} from "nextsapien-component-lib";

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
    StoreDevtoolsModule.instrument({connectInZone: true}),
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    PickerModule,
    CircleProgressModule,
    // NextsapienComponentLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
