import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  _historial = [] 
  constructor() { 
    if( localStorage.getItem('historial') ){
        this._historial = JSON.parse( localStorage.getItem('historial')! );
      }
  }

  ngOnInit(): void {
  }

}
