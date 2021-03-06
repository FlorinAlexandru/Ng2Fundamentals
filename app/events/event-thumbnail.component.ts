import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `    <div  [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
            <span *ngSwitchCase="'8:00 am'">Early start</span>
            <span *ngSwitchCase="'10:00 am'">Late start</span>
            <span *ngSwitchDefault>Normal start</span>
        </div>
        <div>Price: \${{event.price}}</div>
        <div *ngIf="event?.location">
            <span>Location: {{event.location.address}}</span>
            <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
        </div>
        <div *ngIf="event?.location.onlienUrl">
            Online URL: {{event?.location.onlineUrl}}
        </div>
    </div>`,
    styles: [`
        .green { color: #003300 !important;}
        .bold { font-weight: bold;}
        .thumbnail { min-height: 220px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
    `]
})
export class EventThumbnailComponent{
    @Input() event: any
    @Output() eventClick = new EventEmitter()

    handleClickMe(){
        console.log('clicked');
        this.eventClick.emit(this.event.name);
    }

    getStartTimeClass(){
        if (this.event && this.event.time === '8:00 am'){
            return ['green',  'bold'];
        }
        return []
    }
}