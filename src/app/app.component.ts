import { Component } from '@angular/core';
import { chaudaar } from './chaudaar';
import cockatoo from '../assets/data/cockatoo.json';
import dolphin from '../assets/data/dolphin.json';
import{cockatoointerface} from './cockatoointerface';
import{dolphininterface} from './dolphininterface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chaudaar-A4';
  cockatoo01= cockatoo.cockatoo01;
  cockatoo02= cockatoo.cockatoo02;
  cockatoo03 = cockatoo.cockatoo03;

  dolphin01 = dolphin.dolphin01;
  dolphin02= dolphin.dolphin02;
  dolphin03= dolphin.dolphin03;

  Info:chaudaar = {cname: "Aaryaman Chaudhry", cstudentno:991495238, cloginname:"chaudaar", ccampus:"Davis", ctitle: "Assignment 4"}

}
