import { Component, OnInit } from '@angular/core';
import { HeroesComponent } from '../../heroes/heroes.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  home = "Home";
  heroes = "Heroes";
  versus = "Versus";

  constructor() { }

  ngOnInit() {
  }

}
