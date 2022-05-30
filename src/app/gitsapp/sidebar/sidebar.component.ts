import { Component, OnInit } from '@angular/core';
import { GifsService} from "../services/gifs.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  get _historial(){
    return this.historia.historial
     
  }
  constructor( private historia:GifsService ) { 
    
  }

  ngOnInit(): void {
    
  }
  buscar(query:string){
    this.historia.buscarGifs(query);
  }




}
