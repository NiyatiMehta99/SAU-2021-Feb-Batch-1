import { Injectable } from '@angular/core';
import { Session } from './modal/session';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  sauSessions: Session[] = [
    {
      id: 1,
      title: 'VCS',
      instructor: 'Biresh Kumar',
      desc: 'Git - Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later.',
    },
    {
      id: 2,
      title: 'Javascript',
      instructor: 'Rahul Pareek',
      desc: 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.',
    },
    {
      id: 3,
      title: 'Angular',
      instructor: 'Dhruv Rana',
      desc: 'Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.',
    },
    {
      id:4,
      title:"React Native",
      instructor:"Tajammul Pasha",
      desc:"React Native is an open-source mobile application framework created by Facebook, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use React's framework along with native platform capabilities"
    }
  ];

  constructor() {}

  getSessions() {
    return this.sauSessions;
  }

  addSession(session: Session) {
    this.sauSessions.push(session);
  }

  deleteSession(session: Session) {
    console.log(session);
    this.sauSessions = this.sauSessions.filter((item) => {
      return item.id != session.id;
    });
  }

  updateSession(session: Session) {
    //console.log(session);
    let newSession = this.sauSessions;
    for (let i = 0; i < newSession.length; i++) {
      if (newSession[i].id == session.id) {
        newSession[i].title = session.title;
        newSession[i].instructor = session.instructor;
        newSession[i].desc = session.desc;
      }
    }
    //console.log(newSession);

    this.sauSessions = newSession;
  }
}
