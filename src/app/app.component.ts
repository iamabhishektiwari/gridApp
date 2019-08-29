import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  template:`
    <h1>Hello World! || Welcome to the page of {{title}}</h1>
    <hr>
    <app-grid-header [herolist]="herodata.data"></app-grid-header>
    <hr>
    
    <hr>

  `
})
export class AppComponent implements OnInit{
  title = 'Heros';
  herodata;
  constructor(private hs:HeroService){};


  ngOnInit(): void {
    this.hs.getdata().subscribe((serverdata)=>{
      this.herodata = serverdata;
    });
  }


}
