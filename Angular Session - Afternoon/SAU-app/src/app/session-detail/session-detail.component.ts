import { Component, Input, OnInit } from '@angular/core';
import { Session } from '../modal/session';

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.css']
})
export class SessionDetailComponent implements OnInit {

  @Input() selectedSession:Session;

  constructor() { }

  ngOnInit(): void {
  }

}
