import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { ArtistsService } from '../../shared/artists.service';
import { Artist } from '../artist.model';

@Component({
  selector: 'app-artistslist',
  templateUrl: './artistslist.component.html',
  styleUrls: ['./artistslist.component.css']
})
export class ArtistslistComponent implements OnInit {
  artists : Artist[];
  idcountry : string;
  subscription : Subscription; 
  data:any;
  articles : any;

  constructor(private artistsService : ArtistsService,
      private route: ActivatedRoute) { } 
  

  ngOnInit() {
    //  this.route.params.subscribe(
    //   (params:Params)=>{
    //      console.log(params+"this is param");

   this.subscription = this.artistsService.getArtists().subscribe(
      (data)=>{
        this.articles = data['topartists'];        
        this.artists = this.articles['artist'];
        this.artistsService.artists = this.artists.splice(10,this.artists.length);
      }
    );  
  //});
}
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}


