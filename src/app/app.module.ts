import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { FetchJsonPipe } from './fetch-json.pipe';
import { FlyingHeroesComponent, FlyingHeroesImpureComponent } from './flying-heroes.component';
import { FlyingHeroesImpurePipe, FlyingHeroesPipe } from './flying-heroes.pipe';
import { HeroAsyncMessageComponent } from './hero-async-message.component';
import { HeroBirthdayComponent } from './hero-birthday1.component';
import { HeroBirthday2Component} from './hero-birthday2.component';
import { HeroListComponent } from './hero-list.component';
import { PowerBoostCalculatorComponent } from './power-boost-calculator.component';
import { PowerBoosterComponent } from './power-booster.component';


import{ 
  AfterContentParentComponent,
  AfterContentComponent,
  ChildComponent
} from './after-content.component';

import {
  AfterViewParentComponent,
  AfterViewComponent,
  ChildViewComponent
} from './after-view.component';

import {
  CounterParentComponent,
  MyCounterComponent
} from './counter.component';

import {
  DoCheckParentComponent,
  DoCheckComponent 
} from './do-check.component';

import {
  OnChangesParentComponent,
  OnChangesComponent
} from './on-changes.component';

import { PeekABooParentComponent } from './peek-a-boo-parent.component';
import { PeekABooComponent } from './peek-a-boo.component';

import { SpyParentComponent } from './spy.compoennt';
import { SpyDirective } from './spy.directive';
import { OnChanges } from './on-changes.component.ts/on-changes.component.ts.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    AfterContentParentComponent,
    AfterContentComponent,
    ChildComponent,
    AfterViewParentComponent,
    AfterViewComponent,
    ChildViewComponent,
    CounterParentComponent,
    MyCounterComponent,
    DoCheckParentComponent,
    DoCheckComponent,
    OnChangesParentComponent,
    OnChangesComponent,
    PeekABooParentComponent,
    PeekABooComponent,
    SpyParentComponent,
    SpyDirective,
    FlyingHeroesComponent,
    FlyingHeroesImpureComponent,
    HeroAsyncMessageComponent,
    HeroBirthdayComponent,
    HeroBirthday2Component,
    HeroListComponent,
    PowerBoosterComponent,
    PowerBoostCalculatorComponent,
    FlyingHeroesPipe,
    FlyingHeroesImpurePipe,
    FetchJsonPipe,
    ExponentialStrengthPipe,
    OnChangesParentComponent,
    OnChangesComponent,
    
    OnChanges.Component.TsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }