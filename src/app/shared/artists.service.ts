import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Artist } from '../artists/artist.model';

@Injectable({
    providedIn: 'root'
})
export class ArtistsService {

    API_KEY = 'f9539d1a6a8951490e4b01c3b554f662';      
     public artists : Artist[];
     public artistsNames : string[];
     public idcountry : string = 'germany';

     constructor(private http: HttpClient) { }

      getTopArtistsNames(){
        return this.http.get(`https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&limit=200&api_key=${this.API_KEY}&format=json`);
       }

      getArtists(){
            return this.http.get(`https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${this.idcountry}&limit=10&api_key=${this.API_KEY}&format=json`);
       }
      
       getArtist(name : string){
            return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=${this.API_KEY}&format=json`);
       }

       getTopAlbums(name : string){
        return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&limit=5&api_key=${this.API_KEY}&format=json`);
       }

       getTopTracks(name : string){
        return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name}&limit=5&api_key=${this.API_KEY}&format=json`);
       }
    }