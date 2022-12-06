import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{EventService}from'../shared/event.service';
import{Event}from'../shared/event.model';
declare var M: any;
//@ts-ignore
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  providers : [EventService]
})
export class EventComponent implements OnInit {

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshEventList();
  }
  resetForm(form?:NgForm)
  {
    if(form)
     form.reset();
    this.eventService.selectedEvent= {
      _id:"",
      title:"",
      description:"",
      date:new Date('1900-0-0'),
      address:"",
      image:""
      
    }
  }
  onSubmit(form:NgForm)
  {
    if(form.value._id==""){   
    this.eventService.postEvent(form.value).subscribe((res)=>{
      this.resetForm(form);
      this.refreshEventList();
      M.toast({html:'Event Saved Successfully ',classes:'rounded'});
    });
  }
  else{

    this.eventService.putEvent(form.value).subscribe((res)=>{
      this.resetForm(form);
      this.refreshEventList();
      M.toast({html:'Update Successfully ',classes:'rounded'});
    });
  }
  }
  refreshEventList(){
    this.eventService.getEventList().subscribe((res)=>{
      this.eventService.events = res as Event[] ;
    });
  }

  onEdit(ev:Event)

  {
    this.eventService.selectedEvent = ev ;
  }

  onDelete(_id:string,form:NgForm)
  {
    if(confirm('Are you sure to delete  this record ?')==true){
      this.eventService.deleteEvent(_id).subscribe((res)=>{
        this.refreshEventList();
        this.resetForm(form);
        M.toast({html:'Deleted successfully' , classes:'rounded'})
      })
    }
  }

}