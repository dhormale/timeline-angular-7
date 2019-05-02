import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-timeline-entry',
  templateUrl: './timeline-entry.component.html',
  styleUrls: ['./timeline-entry.component.css']
})
export class TimelineEntryComponent {
  @Input() timeEntryHeader: string;
  @Input() timeEntryContent: string;
  @Input() timeEntryPlace: string;

}
