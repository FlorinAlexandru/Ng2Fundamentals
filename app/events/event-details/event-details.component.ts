import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../shared/event.service';

@Component({
    templateUrl: '/app/events/event-details/event-details.component.html',
    styles: [ `
        .container {padding-let: 20px; padding-right: 20px;}
        .event-image { height: 100px}
    ` ]
})
export class EventDetailsComponent implements OnInit{
    event: any
    
    constructor(private eventService: EventService, private route: ActivatedRoute){

    }

    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }

}