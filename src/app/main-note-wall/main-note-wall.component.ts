import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NoteDetailsComponent } from '../Components/note-details/note-details.component';

@Component({
  selector: 'app-main-note-wall',
  templateUrl: './main-note-wall.component.html',
  styleUrls: ['./main-note-wall.component.css']
})
export class MainNoteWallComponent implements OnInit {
  bsModalRef: BsModalRef;

  get noteList(){
    return this.notesService.noteList;
  }

  constructor(
    private notesService: NotesService
    , private modalService: BsModalService
  ) { }

  ngOnInit() {
  }

  showNoteDetails(note) {
    const initialState = {
      note: note
    };
    this.bsModalRef = this.modalService.show(NoteDetailsComponent, {initialState});
    this.bsModalRef.content.note = note;
  }

}
