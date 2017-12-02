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

  async getPrograms(): Promise<Program[]> {
    //return this.http.get<Program[]>(this.programsUrl);
    const program1 = new Program();
    program1.id = 1;
    program1.title = "PCC Vocation Training";
    return Promise.resolve([program1]);
  }

  getProgram(id: number): Observable<Program> {
    const url = `${this.programsUrl}/${id}`;
    return this.http.get<Program>(url);
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
