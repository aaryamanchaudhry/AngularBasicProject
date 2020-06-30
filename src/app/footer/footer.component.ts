import { Component, OnInit, Input } from '@angular/core';
import{chaudaar} from '../chaudaar';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() footerInfo:chaudaar;
  constructor() { }

  ngOnInit() {
  }

}
