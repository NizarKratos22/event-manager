import { Injectable } from '@angular/core';
import{HttpClient, HttpClientModule}from'@angular/common/http';
import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { Observable } from 'rxjs';
import {map, filter} from 'rxjs/operators';


import{Event} from'./event.model';


@Injectable({
  providedIn: 'root'
})
export class EventService {
selectedEvent!:Event;
events!:Event[];

readonly baseURL= 'http://localhost:3000/events/';
  constructor(private http:HttpClient) { }
  postEvent(ev:Event){
     return this.http.post(this.baseURL,ev);
  }
  getEventList(){
    return this.http.get(this.baseURL);
 }
 putEvent(ev:Event)
 {
  return this.http.put(this.baseURL+`/${ev._id}`,ev);
  
 }
 deleteEvent(_id:string)
 {
  return this.http.delete(this.baseURL+`/${_id}`);
  
 }
}