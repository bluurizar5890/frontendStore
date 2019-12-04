import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'compact-sidebar-icons',
  templateUrl: './compact-sidebar-icons.component.html',
  styleUrls: ['./compact-sidebar-icons.component.scss']
})
export class CompactSidebarIconsComponent implements OnInit {

  public hoverToggle;
  constructor() { }
  openToggle: boolean;

  receiveToggle($event) {
    this.openToggle = $event
    this.hoverToggle = this.openToggle;
  }

  ngOnInit() { }

}
