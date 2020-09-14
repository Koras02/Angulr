import { Component, Pipe } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  template: `
    <h2>Heroes from JSON File</h2>

    <div *ngFor="let hero of ('assets/heroes.json' | fetch) ">
      {{hero.name}}
    </div>  
      
    <p>Heroes as Json:
      {{'assets/heroes.json' | fetch | json}}
    </p>`  
})
export class HeroListComponent { }