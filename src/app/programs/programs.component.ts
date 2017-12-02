import { Component, OnInit } from '@angular/core';

import { Program } from '../program';
import { ProgramService } from '../program.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})

export class ProgramsComponent implements OnInit {
  programs: Program[];

  constructor(private programService: ProgramService) { }

  ngOnInit() {
    // this.getPrograms();
  }

  getPrograms(): void {
    this.programService.getPrograms()
    .subscribe(programs => this.programs = programs);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.programService.addProgram({ name } as Program);
  }

  delete(program: Program): void {
    this.programs = this.programs.filter(h => h !== program);
    this.programService.deleteProgram(program);
  }
}
