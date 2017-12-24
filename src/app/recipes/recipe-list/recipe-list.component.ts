import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export  class RecipeListComponent implements OnInit {
recipes: Recipe[]=[
  new Recipe('test recipe','This is simply a test','https://www.thesun.co.uk/living/3246694/why-disney-cartoon-characters-only-have-three-fingers')
]; 

  constructor() { }

  ngOnInit() {
  }

}
