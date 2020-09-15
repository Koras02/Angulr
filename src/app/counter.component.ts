import { 
  Component, Input,
  OnChanges, SimpleChanges,
} from '@angular/core';

import { LoggerService } from './logger.service';

@Component({
  selector: 'app-counter',
  template: `
  <div class="counter">
    Counter = {{counter}}
    
    <h5>-- Counter Change Log --</h5>
    <div *ngFor="let chg of changeLog" appSpy>{{chg}}</div>
   </div> 
    `,
    styles: ['.counter {background: LightYellow; padding: 8px; margin-top: 8px}']
})
export class MyCounterComponent implements OnChanges {
  @Input() counter: number; 
  changeLog: string[] = []; 

  ngOnChanges(changes: SimpleChanges) {

    
  }
}