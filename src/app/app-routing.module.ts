import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainNoteWallComponent } from './main-note-wall/main-note-wall.component';

const routes: Routes = [
  {path: '', redirectTo: 'note-wall', pathMatch: 'full'},
  { path: 'note-wall', component: MainNoteWallComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
