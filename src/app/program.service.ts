import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Program } from './program';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProgramService {

  private programsUrl = 'api/programs';  // URL to web api
  private programCollection: AngularFirestoreCollection<Program>;

  constructor(
    private http: HttpClient,
    private afs: AngularFirestore
  ) {
    this.programCollection = this.afs.collection<Program>('programs');
    this.programs = this.programCollection.valueChanges();
  }

  public programs: Observable<Program[]>;

  getProgram(id: number): Observable<Program> {
    const doc = this.afs.doc<Program>(`programs/${id}`);
    return doc.valueChanges();
  }


  /* GET programs whose name contains search term */
  searchProgram(term: string): void {

  }

  //////// Save methods //////////

  /** POST: add a new program to the server */
  addProgram(program: Program): void {
    this.programCollection.add(program);
  }

  /** DELETE: delete the program from the server */
  deleteProgram (program: Program | number):void {

  }

  /** PUT: update the program on the server */
  updateProgram (program: Program):void {

  }
}
