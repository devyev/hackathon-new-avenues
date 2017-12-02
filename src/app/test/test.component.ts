import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Program } from '../program';

export interface ProgramTemp { name: string; }

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  private programCollection: AngularFirestoreCollection<ProgramTemp>;
  programs: Observable<ProgramTemp[]>;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.programCollection = this.afs.collection<ProgramTemp>('programs');
    this.programs = this.programCollection.valueChanges();
  }

  addItem() {
    this.programCollection.add({ name: 'Program 1'});
  }
}
