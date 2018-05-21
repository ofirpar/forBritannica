import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { NotesService } from './services/notes.service';
import { MainNoteWallComponent } from './main-note-wall/main-note-wall.component';
import { NoteDetailsComponent } from './Components/note-details/note-details.component';
import { AddNoteComponent } from './Components/add-note/add-note.component';
import { BsModalService, ModalBackdropComponent, ModalContainerComponent } from 'ngx-bootstrap/modal';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader/component-loader.factory';
import { PositioningService } from 'ngx-bootstrap/positioning';

@NgModule({
  entryComponents: [
    ModalBackdropComponent
    , ModalContainerComponent
    , AddNoteComponent
    , NoteDetailsComponent
  ],
  declarations: [
    AppComponent,
    NoteComponent,
    MainNoteWallComponent,
    NoteDetailsComponent,
    AddNoteComponent
    , ModalBackdropComponent
    , ModalContainerComponent
    , AddNoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    NotesService
  , BsModalService
  , ComponentLoaderFactory
  , PositioningService],
  bootstrap: [AppComponent]
})
export class AppModule { }
