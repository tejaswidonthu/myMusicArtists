import { Component, Input, OnInit } from '@angular/core';
import { ArtistsService } from '../shared/artists.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() country : string;
  constructor(private artistService : ArtistsService) { }
  selectedCountry : string = 'Germany';
  ngOnInit(): void {
  }

  onClick(country : string){
    console.log(country);
    this.artistService.idcountry = country.toLowerCase();
    this.selectedCountry = country;
  }
}
