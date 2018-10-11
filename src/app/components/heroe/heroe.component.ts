import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Heroe } from 'src/app/services/heroes.service';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroeId:Heroe = null;
  // heroeNombre:Heroe = null;

  constructor( private activatedRoute: ActivatedRoute,
               private _heroeService: HeroesService,
              ) {
    this.activatedRoute.params.subscribe( params => {
      this.heroeId = this._heroeService.getHeroeId(params['id']);
      // this.heroeNombre = this._heroeService.getHeroeNombre(params['nombre']);
    } );
  }

  ngOnInit() {
  }

}
