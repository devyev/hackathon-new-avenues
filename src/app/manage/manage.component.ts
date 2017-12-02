import { Component, OnInit } from '@angular/core';

import { Program } from '../program';
import { ProgramService } from '../program.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  constructor(private programService: ProgramService) { }

  ngOnInit() {
  }

  add(id: number, type: string, typeCode: string, title: string, description: string, orgName: string, eventURL: string, orgURL: string, phone: string, email: string) {
    this.programService.addProgram({id, type, typeCode, title, description, orgName, eventURL, orgURL, phone, email} as Program);
  }

}
