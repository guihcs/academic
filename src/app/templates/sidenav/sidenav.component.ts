import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Input() navDescriptor;

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  selected;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggle() {
    this.sidenav.toggle();
  }

}
