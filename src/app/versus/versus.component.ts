import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../Hero';
import { HEROES } from '../heroes/mock-heroes'

@Component({
  selector: 'app-versus',
  templateUrl: './versus.component.html',
  styleUrls: ['./versus.component.css']
})
export class VersusComponent implements OnInit {
  @Input() heroes: Hero[] = HEROES;
  hero1: Hero;
  hero2: Hero;
  winner: any = null;

  constructor() { 
  }

  ngOnInit() {
  }

  versus(){
    if(this.hero1 && this.hero2){
      if(this.hero1.power > this.hero2.power){
        this.winner = this.hero1;
      }
      else if(this.hero2.power > this.hero1.power){
        this.winner = this.hero2
      }
      else{
        this.winner = new Hero();
        this.winner.name = "None";
      }
    }

    this.hero1 = null;
    this.hero2 = null;
  }

  setFirstHero(hero: Hero){
    this.hero1 = hero;
  }

  setSecondHero(hero: Hero){
    this.hero2 = hero;
  }

}
