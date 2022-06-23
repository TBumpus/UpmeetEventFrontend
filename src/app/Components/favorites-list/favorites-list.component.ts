import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Favorite } from 'src/app/Interfaces/favorite';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css']
})
export class FavoritesListComponent implements OnInit {

  constructor(private service:ApiService, private route:ActivatedRoute) { }

  favoritesArray:Favorite[] = [];

  ngOnInit(): void {
    this.getAllFavorites();
    this.route.params.subscribe(params => this.getAllFavorites());
  }

  getAllFavorites(){
    this.service.getAllFavorites().subscribe((data:Favorite[]) => this.favoritesArray = data);
  }
}
