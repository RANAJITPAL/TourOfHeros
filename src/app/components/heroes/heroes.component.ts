import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/properties/hero'; 
import { HEROES } from 'src/app/data/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
  heroes = HEROES;
  constructor() { }

  ngOnInit(): void {
  }

  selectedHero?: Hero;
  
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
}

