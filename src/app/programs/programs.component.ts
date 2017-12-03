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

  constructor(public programService: ProgramService) { }

  ngOnInit() {
    
  }

  delete(program: Program): void {
    
    this.programs = this.programs.filter(h => h !== program);
    this.programService.deleteProgram(program);
  }
  
}
