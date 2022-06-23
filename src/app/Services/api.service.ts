import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Event } from '../Interfaces/event';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private client:HttpClient) { }

  getAllEvents() : Observable<Event[]>{
    let events = this.client.get<Event[]>(environment.apiUrl + 'Event/GetAllEvents');

    return events;
  }

  addEventToFavorites(eventId:number){ 
    let eventToFav = this.client.post<Event>(environment.apiUrl + 'Event/AddEventToFavorites', {eventId:eventId, userId:1});
    return eventToFav;
  }

}
