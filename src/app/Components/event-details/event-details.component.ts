import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { Event } from 'src/app/Interfaces/event';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  constructor(private service:ApiService, private route:ActivatedRoute) { }

  eventArray:Event[] = [];
  eventToFave:Event | undefined;

  ngOnInit(): void {
    this.getAllEvents();
   
  }

  getAllEvents(){
    this.service.getAllEvents().subscribe((data:Event[]) => this.eventArray = data);
  }

  addEventToFavorites(eventId:number){
    this.service.addEventToFavorites(eventId).subscribe((data:Event) => this.eventToFave = data);
  }
}
