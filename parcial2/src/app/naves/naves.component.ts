import { Component, OnInit } from '@angular/core';
import { Naves } from './Naves';
import { NavesService } from './naves.service';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css']
})
export class NavesComponent implements OnInit {

  constructor(private navesService: NavesService) { }
  naves: Array<Naves> = [];

  getNaves() {
    this.navesService.getNaves().subscribe( naves => {
      this.naves = naves;
      
    });
  }

  ngOnInit() {
    this.getNaves();
  }

}
