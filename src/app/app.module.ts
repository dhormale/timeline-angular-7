import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineEntryComponent } from './timeline/timeline-entry/timeline-entry.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TimelineComponent, TimelineEntryComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
