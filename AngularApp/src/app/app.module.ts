import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule}from'@angular/common/http';
import { EventService } from './shared/event.service';
import {formatDate} from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
