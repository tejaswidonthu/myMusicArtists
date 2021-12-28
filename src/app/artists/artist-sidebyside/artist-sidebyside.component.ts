import { Component, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ArtistsService } from 'src/app/shared/artists.service';

@Component({
  selector: 'app-artist-sidebyside',
  templateUrl: './artist-sidebyside.component.html',
  styleUrls: ['./artist-sidebyside.component.css']
})

export class ArtistSidebysideComponent implements OnInit {
  artistNames = [];
  subscription: Subscription;
  searchText1 = "";
  isSearchShow1 = false;
  showLeftDetails = false;
  artName1: string;
  artSummary1: string;
  artListeners1: string;
  artPlaycount1: string;
  artUrl1: string;
  artAlbums1: string[];
  artTracks1: string[];
  error1 = false;
  errorMessage1 = "";
  imgData1: any;
  isLoading1 = false;

  searchText2 = "";
  isSearchShow2 = false;
  showRightDetails = false;
  artName2: string;
  artSummary2: string;
  artListeners2: string;
  artPlaycount2: string;
  artUrl2: string;
  artAlbums2: string[];
  artTracks2: string[];
  error2 = false;
  errorMessage2 = "";
  imgData2: any;
  isLoading2 = false;

  @HostBinding('class.open') isOpen = false;

  constructor(private elRef: ElementRef,
    private artistsService: ArtistsService) { }

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) { /* Function to close search bar */
    this.isSearchShow1 = false;
    this.isSearchShow2 = false;
  }

  ngOnInit(): void {
    this.subscription = this.artistsService.getTopArtistsNames().subscribe(  /* Subscription to get top artists function */
      (data) => {
        if (!data['error']) {
          const articles = data['artists'];
          let artists: any[] = articles['artist'];
          const artistList = [];
          for (let ar of artists) {
            let wkday: string = ar['name'];
            artistList.push(wkday);
          }
          this.artistNames = artistList;
        } else {
          alert(data['message']);
        }
      }
    );
  }

  onChangeEvent1() {
    this.isSearchShow1 = true;
  }

  onSearchClose1() {
    this.setLeftArtist(this.searchText1)
    this.isSearchShow1 = false;
  }

  onChangeEvent2() {
    this.isSearchShow2 = true;
  }

  onSearchClose2() {
    this.setRightArtist(this.searchText2)
    this.isSearchShow2 = false;
  }

  setLeftArtist(data: any) {
    this.isLoading1 = true;
    this.subscription = this.artistsService.getArtist(data).subscribe(  /* Subscription to get specific artist details function */
      (data) => {
        if (!data['error']) {
          this.error1 = false;
          this.setArtistInfoLeft(data);
        } else {
          this.error1 = true;
          this.errorMessage1 = data['message'];
        }
      }
    );

    this.subscription = this.artistsService.getTopAlbums(this.searchText1).subscribe(  /* Subscription to get specific artist Top Albums function */
      (data) => {
        if (!data['error']) {
          this.error1 = false;
          const albums = data['topalbums'];
          const albumNames = albums['album'];
          const albumList = [];
          for (let ar of albumNames) {
            let name: string = ar['name'];
            let count: string = ar['playcount'];
            let data: string = name + "     (" + count + ")";
            albumList.push(data);
          }
          this.artAlbums1 = albumList;
        } else {
          this.error1 = true;
          this.errorMessage1 = data['message'];
        }
        this.isLoading1 = false;
      }
    );

    this.subscription = this.artistsService.getTopTracks(this.searchText1).subscribe(  /* Subscription to get specific artist Top Tracks function */
      (data) => {
        if (!data['error']) {
          this.error1 = false;
          const track = data['toptracks'];
          const trackNames = track['track'];
          const trackList = [];
          for (let ar of trackNames) {
            let name: string = ar['name'];
            let count: string = ar['playcount'];
            let data: string = name + "     (" + count + ")";
            trackList.push(data);
          }
          this.artTracks1 = trackList;
        } else {
          this.error1 = true;
          this.errorMessage1 = data['message'];
        }
      }
    );
    this.searchText1 = "";
    this.showLeftDetails = true;
  }

  setArtistInfoLeft(data: any) {
    const dataset = data['artist'];
    const bio = dataset['bio'];
    const stats = dataset['stats'];
    const imaarrdata = dataset['image'];
    const singleImg = imaarrdata[4];
    this.imgData1 = singleImg['#text'];

    this.artName1 = dataset['name'];
    this.artSummary1 = bio['summary'];
    this.artPlaycount1 = stats['playcount'];
    this.artListeners1 = stats['listeners'];
    this.artUrl1 = dataset['url'];
  }

  setRightArtist(data: any) {
    this.isLoading2 = true;
    this.subscription = this.artistsService.getArtist(data).subscribe( /* Subscription to get specific artist details function */
      (data) => {
        if (!data['error']) {
          this.error2 = false;
          this.setArtistInfoRight(data);
        } else {
          this.error2 = true;
          this.errorMessage2 = data['message'];
        }
      }
    );

    this.subscription = this.artistsService.getTopAlbums(this.searchText2).subscribe( /* Subscription to get specific artist Top Albums function */
      (data) => {
        if (!data['error']) {
          this.error2 = false;
          const albums = data['topalbums'];
          const albumNames = albums['album'];
          const albumList = [];
          for (let ar of albumNames) {
            let name: string = ar['name'];
            let count: string = ar['playcount'];
            let data: string = name + "     (" + count + ")";
            albumList.push(data);
          }
          this.artAlbums2 = albumList;
        } else {
          this.error2 = true;
          this.errorMessage2 = data['message'];
        }
        this.isLoading2 = false;
      }
    );

    this.subscription = this.artistsService.getTopTracks(this.searchText2).subscribe( /* Subscription to get specific artist Top Tracks function */
      (data) => {
        if (!data['error']) {
          this.error2 = false;
          const track = data['toptracks'];
          const trackNames = track['track'];
          const trackList = [];
          for (let ar of trackNames) {
            let name: string = ar['name'];
            let count: string = ar['playcount'];
            let data: string = name + "     (" + count + ")";
            trackList.push(data);
          }
          this.artTracks2 = trackList;
        } else {
          this.error2 = true;
          this.errorMessage2 = data['message'];
        }
      }
    );
    this.searchText2 = "";
    this.showRightDetails = true;
  }

  setArtistInfoRight(data: any) {
    const dataset = data['artist'];
    const bio = dataset['bio'];
    const stats = dataset['stats'];
    const imaarrdata = dataset['image'];
    const singleImg = imaarrdata[4];
    this.imgData2 = singleImg['#text'];

    this.artName2 = dataset['name'];
    this.artSummary2 = bio['summary'];
    this.artPlaycount2 = stats['playcount'];
    this.artListeners2 = stats['listeners'];
    this.artUrl2 = dataset['url'];
  }

}
