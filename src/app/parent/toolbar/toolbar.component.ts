import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  // (output-attribute) emitter that needs to be declared as function call
  @Output() toggleSidenav = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
