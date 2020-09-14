import { Component } from '@angular/core';

@Component({
  selector: 'app-power-booster',
  template: `
    <h2>power Booster</h2>
    <p>Super power boost: {{2 | exponentialStrength: 10}}</p>
  `
})
export class PowerBoosterComponent {  }