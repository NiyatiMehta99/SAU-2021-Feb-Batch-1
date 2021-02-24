import { Component, OnInit } from '@angular/core';
import { Session } from '../modal/session';
import {MatDialog} from '@angular/material/dialog'
import { SessionService } from '../session.service';
import { AddSessionComponent } from '../add-session/add-session.component';
import { ThisReceiver } from '@angular/compiler';
import { UpdateSessionComponent } from '../update-session/update-session.component';



@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css'],
})
export class SessionListComponent implements OnInit {
  selectedSession: Session;

  sauSessions: Session[] = [];

  constructor(
    private sessionService: SessionService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.sauSessions = this.sessionService.getSessions();
  }

  updateSelected() {
    this.dialog.open(UpdateSessionComponent,{
      width:'400px'
    })
  }

  displaySelected(session:Session)
  {
    this.selectedSession=session;
  }

  deleteSession(session: Session) {
    this.sessionService.deleteSession(session);
    this.sauSessions = this.sessionService.getSessions();
  }

  addToSession() {
    this.dialog.open(AddSessionComponent, {
      width: '400px',
    });
  }
}
