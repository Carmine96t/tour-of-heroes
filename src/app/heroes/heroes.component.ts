import { Component, OnInit , Input, inject} from '@angular/core';
import { Hero } from '../Hero';
import { HEROES } from './mock-heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  tmpHero: Hero = new Hero();
  lastId: number;
  canInsert = false;
  action = "Select Hero / Insert New Hero";

  @Input() heroes: Hero[] = [];

  constructor() { 
    this.heroes = HEROES;
    this.lastId = this.heroes.length;
    console.log(this.lastId);
  }

  getHeroes(){
    return this.heroes;
  }

  ngOnInit() {
  }

  addHero(){
    if(!this.heroes.find(x=>x.id === this.tmpHero.id)){
      this.lastId += 1;
  
      this.heroes.push({
        id: this.lastId,
        name: this.tmpHero.name,
        power: this.tmpHero.power
      });
  
    }else{
      this.updateHero(this.tmpHero);
    }
    
    this.tmpHero = new Hero();
    this.action = "Select Hero / Insert New Hero";
  }

  updateHero(hero: Hero){
    this.heroes.find(x=>x.id === this.tmpHero.id).power = this.tmpHero.power;
    this.heroes.find(x=>x.id === this.tmpHero.id).name = this.tmpHero.name;
  }

  findHero(hero: Hero){
    if(this.heroes.find(x => x.id === hero.id)){
      return true;
    }
    return false;
  }

  removeHero(hero: Hero){
    if(hero.id > 3){
      this.heroes.splice(this.heroes.indexOf(hero), 1);
      this.lastId = this.lastId - 1;
    }

    this.tmpHero = new Hero();
    this.action = "Select Hero / Insert New Hero";
  }


  selectHero(id){
    this.action = "Selected Heros info";

    this.tmpHero.id = this.heroes.find(x=>x.id == id).id;
    this.tmpHero.name = this.heroes.find(x=>x.id == id).name;
    this.tmpHero.power = this.heroes.find(x=>x.id == id).power;
  }  


  refreshName(){
    this.tmpHero.id = null;
    this.tmpHero.name = null;

    this.action = "Select Hero / Insert New Hero";
  }

  refreshPower(){
    this.tmpHero.id = null;
    this.tmpHero.power = null;

    this.action = "Select Hero / Insert New Hero";
  }



}
