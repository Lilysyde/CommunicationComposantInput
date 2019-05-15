import { Component, OnInit } from '@angular/core';
import { developer } from '../common/developer.model';
import { skill } from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

  public developer : developer


  constructor() { }

  ngOnInit() {
    this.developer= new developer ("barlet","emilie", 27 , "femme", "fais pas chier",[new skill("bambi","logo", "site"), new skill("bambi1","logo1", "site1")])
  }

}
