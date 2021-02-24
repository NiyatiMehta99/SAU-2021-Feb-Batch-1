import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Session } from '../modal/session';
import { SessionService } from '../session.service';
import { MatDialogRef } from '@angular/material/dialog';
import { SessionListComponent } from '../session-list/session-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css'], 
})
export class AddSessionComponent implements OnInit {
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

  addToList() {
    const session: Session = {
      id: this.id.value,
      title: this.title.value,
      instructor: this.instructor.value,
      desc: this.desc.value,
    };
    this.sessionService.addSession(session);
    this.dialog.close();
  }
}
