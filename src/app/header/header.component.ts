import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ArtistsService } from '../shared/artists.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() country: string;
  selectedCountry: string = 'Germany';
  subscription: Subscription;
  dataset = [];
  searchText = ""
  isSearchShow = false;

  constructor(private artistsService: ArtistsService) { }

  ngOnInit(): void {
    this.subscription = this.artistsService.getTopArtistsNames().subscribe(
      (data) => {
        if (!data['error']) {
        const articles = data['artists'];
        let artists: any[] = articles['artist'];
        const artistList = [];
        for (let ar of artists) {
          let wkday: string = ar['name'];
          artistList.push(wkday);
        }
        this.dataset = artistList;
        this.artistsService.artistsNames = artistList;
      }else{
        alert(data['message']);
      }
      }
    );
  }

  onClick(country: string) {
    this.artistsService.idcountry = country.toLowerCase();
    this.selectedCountry = country;
  }
}
