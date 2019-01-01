import { Component, OnInit } from '@angular/core';
import { Hero } from '../customVariable/hero'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = new Hero();
  constructor() { }

  ngOnInit() {
alert('asdfsdf');
// this.hero = {};
    this.hero.name = 'Govil';
    this.hero.id = 123123;
    // this.hero = 'Windstorm';
  }

}
