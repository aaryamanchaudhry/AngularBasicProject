import { Component, OnInit, Input } from '@angular/core';
import {cockatoointerface} from '../cockatoointerface';
import {dolphininterface} from '../dolphininterface';


@Component({
  selector: 'app-chaudaar',
  templateUrl: './chaudaar.component.html',
  styleUrls: ['./chaudaar.component.css']
})
export class ChaudaarComponent implements OnInit {

  outArea: string;

csscolor:string;

  cockatooselection: cockatoointerface[];
  dolphinselection: dolphininterface[];

  @Input() cockatoo01: cockatoointerface[];
  @Input() cockatoo02: cockatoointerface[];
  @Input() cockatoo03: cockatoointerface[];

  @Input() dolphin01: dolphininterface[];
  @Input() dolphin02: dolphininterface[];
  @Input() dolphin03: dolphininterface[];
  constructor() { }

  ngOnInit() {
  }

  
  displaycockatoo(num){
this.csscolor = "cockatoo";

    switch(num){
      case 1: this.cockatooselection = this.cockatoo01; break;
      case 2: this.cockatooselection= this.cockatoo02; break;
      case 3: this.cockatooselection= this.cockatoo03; break;
    }
    this.outArea = " ";

    for (let cockatoo of this.cockatooselection){
      this.outArea += `Name: ` +cockatoo.name + `<br/>` 
      + `Description: ` + cockatoo.description + `<br/>` 
      + `Color: `  + cockatoo.color + `<br/>` +
     `<img src="`+ cockatoo.image +`"/>` 
      ;
    }
  }


  displaydolphin(num){
    this.csscolor="dolphin";
    switch(num){
      case 1: this.dolphinselection = this.dolphin01; break;
      case 2: this.dolphinselection= this.dolphin02; break;
      case 3: this.dolphinselection= this.dolphin03; break;
    }
   
this.outArea = " ";

    for (let dolphin of this.dolphinselection){
      this.outArea += `Name: `+ dolphin.name + `<br/>`
       + `Description: `+ dolphin.description  + `<br/>` 
       + `Color: `+ dolphin.color + `<br/>`
     +  `<img src="`+ dolphin.image +`"/>` 
      ;


   }
    
  }


     

 

}

