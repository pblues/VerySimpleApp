import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop'

import { AppComponent } from './app.component';
import { SongListComponent } from './song-list/song-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SongListComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
