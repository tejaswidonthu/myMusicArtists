import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { ArtistsService } from 'src/app/shared/artists.service';
import { Artist } from '../artist.model';

@Component({
  selector: 'app-artists-detail',
  templateUrl: './artists-detail.component.html',
  styleUrls: ['./artists-detail.component.css']
})
export class ArtistsDetailComponent implements OnInit {
  artist: Artist;
  idname: string;
  artName: string;
  artSummary: string;
  artListeners: string;
  artPlaycount: string;
  artUrl: string;
  artAlbums: string[];
  artTracks: string[];
  error = false;
  errorMessage = "";
  subscription: Subscription;
  imgData: any;
  constructor(private artistService: ArtistsService,
    private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.idname = params['id'];
        this.subscription = this.artistService.getArtist(this.idname).subscribe(
          (data) => {
            if (!data['error']) {
              this.error = false;
              this.setArtistInfo(data);
            } else {
              this.error = true;
              this.errorMessage = data['message'];
            }
          }
        );

        this.subscription = this.artistService.getTopAlbums(this.idname).subscribe(
          (data) => {
            if (!data['error']) {
              this.error = false;
              const albums = data['topalbums'];
              const albumNames = albums['album'];
              const albumList = [];
              for (let ar of albumNames) {
                let name: string = ar['name'];
                let count : string = ar['playcount'];
                let data : string = name + "     (" + count +")";
                albumList.push(data);
              }
              this.artAlbums = albumList;
            } else {
              this.error = true;
              this.errorMessage = data['message'];
            }
          }
        );

        this.subscription = this.artistService.getTopTracks(this.idname).subscribe(
          (data) => {
            if (!data['error']) {
              this.error = false;
              const track = data['toptracks'];
              const trackNames = track['track'];
              const trackList = [];
              for (let ar of trackNames) {
                let name: string = ar['name'];
                let count : string = ar['playcount'];
                let data : string = name + "     (" + count +")";
                trackList.push(data);
              }
              this.artTracks = trackList;
            } else {
              this.error = true;
              this.errorMessage = data['message'];
            }
          }
        );

      });
  }

  setArtistInfo(data: any) {
    const dataset = data['artist'];
    const bio = dataset['bio'];
    const stats = dataset['stats'];
    const imaarrdata = dataset['image'];
    const singleImg = imaarrdata[4];
    this.imgData = singleImg['#text'];

    this.artName = dataset['name'];
    this.artSummary = bio['summary'];
    this.artPlaycount = stats['playcount'];
    this.artListeners = stats['listeners'];
    this.artUrl = dataset['url'];
  }

}
