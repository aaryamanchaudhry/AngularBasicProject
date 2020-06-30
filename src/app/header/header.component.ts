import { Component, OnInit,Input } from '@angular/core';
import { chaudaar } from '../chaudaar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() headerInfo:chaudaar;
  constructor() { }

  ngOnInit() {
  }

}
