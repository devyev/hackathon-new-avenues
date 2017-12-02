import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Program } from './program';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProgramService {

  private programsUrl = 'api/programs';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  /** GET programs from the server */
  getPrograms (): Observable<Program[]> {
    return this.http.get<Program[]>(this.programsUrl);
  }

  /* GET programs whose name contains search term */
  searchProgram(term: string): void {

  }

  //////// Save methods //////////

  /** POST: add a new program to the server */
  addProgram (program: Program): void{

  }

  /** DELETE: delete the program from the server */
  deleteProgram (program: Program | number):void {

  }

  /** PUT: update the program on the server */
  updateProgram (program: Program):void {

  }
}

/** GET program by id. Return `undefined` when id not found */
// getProgramNo404<Data>(id: number): Observable<Program> {
//   const url = `${this.programsUrl}/?id=${id}`;
//   return this.http.get<Program[]>(url)
//     .pipe(
//       map(programs => programs[0]), // returns a {0|1} element array
//       tap(h => {
//         const outcome = h ? `fetched` : `did not find`;
//         this.log(`${outcome} program id=${id}`);
//       }),
//       catchError(this.handleError<Program>(`getProgram id=${id}`))
//     );
// }

/** GET program by id. Will 404 if id not found */
// getProgram(id: number): Observable<Program> {
//   const url = `${this.programsUrl}/${id}`;
//   return this.http.get<Program>(url).pipe(
//     tap(_ => this.log(`fetched program id=${id}`)),
//     catchError(this.handleError<Program>(`getProgram id=${id}`))
//   );
// }
