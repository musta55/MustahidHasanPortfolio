import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:any={
    technologies:[{name:"Nodejs, Mongodb, Express",percent:90,remark:'excellent'}, {name:"Java, Javafx, C#",percent:70,remark:'good'},{name:"Solidity, Ethereum",percent:90,remark:'excellent'},{name:"Hardhat,Hyperledger Firefly",percent:90,remark:'excellent'},{name:"C++",percent:70,remark:'very-good'}, {name:"JavaScript, BootStrap, Angular", percent:90,remark:'excellent'}],
    tools:[{name:"Git",percent:90,remark:'excellent'},{name:"Linux, Windows, Bash",percent:70,remark:'very-good'},{name:"MySql, NoSQL",percent:90,remark:'excellent'},{name:"Docker",percent:70,remark:'very-good'},{name:"Office",percent:80,remark:'excellent'},{name:"Figma, Canva",percent:90,remark:'excellent'}],
    methodologies:[{name:"Scrum",percent:70,remark:'very-good'},{name:"UML",percent:90,remark:'excellent'},{name:"Design Pattern, OOP Principles ",percent:70,remark:'good'},{name:"System Design",percent:80,remark:'very-good'},{name:"TDD",percent:90,remark:'excellent'},{name:"DevOps",percent:50,remark:'average'}]
  };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english);
  }

  ngOnInit(): void {
  }

}

    
    
  
