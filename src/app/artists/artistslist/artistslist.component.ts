import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ArtistsService } from '../../shared/artists.service';
import { Artist } from '../artist.model';

@Component({
  selector: 'app-artistslist',
  templateUrl: './artistslist.component.html',
  styleUrls: ['./artistslist.component.css']
})
export class ArtistslistComponent implements OnInit {
  artists: Artist[];
  idcountry: string;
  subscription: Subscription;
  data: any;

  constructor(private artistsService: ArtistsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.artistsService.getArtists().subscribe( /* Subscription to get Top Artists details from selected Region function */
      (data) => {
        if (!data['error']) {
          const articles = data['topartists'];
          this.artists = articles['artist'];
          const artistList = [];
          for (let ar of this.artists) {
            let wkday: string = ar['name'];
            artistList.push(wkday);
          }
          this.artistsService.artistsNames = artistList;
          this.artistsService.artists = this.artists;
        } else {
          alert(data['message']);
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}


