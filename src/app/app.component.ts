import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Profile', url: '/profile/', icon: 'person' },
    { title: 'Mata Kuliah', url: '/matakuliah/', icon: 'newspaper' },
    { title: 'Jadwal', url: '/jadwal/', icon: 'book' },
    { title: 'Nilai', url: '/nilai/', icon: 'school' },
    { title: 'Kartu Rencana Studi', url: '/krs/', icon: 'card' },
    { title: 'Keuangan', url: '/keuangan/', icon: 'cash' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
