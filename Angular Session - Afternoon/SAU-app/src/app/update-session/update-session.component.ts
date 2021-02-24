import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Session } from '../modal/session';
import { SessionService } from '../session.service';
import { MatDialogRef } from '@angular/material/dialog';
import { SessionListComponent } from '../session-list/session-list.component';

@Component({
  selector: 'app-update-session',
  templateUrl: './update-session.component.html',
  styleUrls: ['./update-session.component.css']
})
export class UpdateSessionComponent implements OnInit {

  sessionForm: FormGroup;
  constructor(
    private sessionService: SessionService,
    private dialog: MatDialogRef<SessionListComponent>
  ) {}


  ngOnInit(): void {
    this.sessionForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl(''),
      instructor: new FormControl(''),
      desc: new FormControl(''),
    });
  }

  get id() {
    return this.sessionForm.get('id') as FormControl;
  }

  get title() {
    return this.sessionForm.get('title') as FormControl;
  }

  get instructor() {
    return this.sessionForm.get('instructor') as FormControl;
  }

  get desc() {
    return this.sessionForm.get('desc') as FormControl;
  }

  updateToList() {
    const session: Session = {
      id: this.id.value,
      title: this.title.value,
      instructor: this.instructor.value,
      desc: this.desc.value,
    };
    this.sessionService.updateSession(session);
    this.dialog.close();
  }

}
