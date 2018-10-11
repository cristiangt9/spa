import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-search-heroes',
  templateUrl: './search-heroes.component.html',
  styleUrls: ['./search-heroes.component.css']
})
export class SearchHeroesComponent implements OnInit {
  heroes: Heroe[] = null;
  termino: string = "";
  constructor( private _activatedRoute: ActivatedRoute,
               private _heroeService: HeroesService,
               private _router: Router
            ) {
   }

  ngOnInit() {
    this._activatedRoute.params.subscribe( params => {
      this.heroes = this._heroeService.buscarHeroes(params['termino']);
      this.termino = params['termino'];
    });
  }
  VerHeroe(nombre: string){
    this._router.navigate(['/heroe', nombre]);
  };
}
