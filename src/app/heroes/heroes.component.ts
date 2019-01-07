import { Component, OnInit } from '@angular/core';
import { Hero } from '../customVariable/hero';
import { HEROES } from '../mockData/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = new Hero();
  heroes = HEROES;

  selectedHero: Hero ;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor() { }

  ngOnInit() {

// this.hero = {};
    this.hero.name = 'Govil';
    this.hero.id = 123123;
    // this.hero = 'Windstorm';

  }

}
