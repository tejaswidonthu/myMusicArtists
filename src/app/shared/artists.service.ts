import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject, Subscription } from 'rxjs';

import { Artist } from '../artists/artist.model';

@Injectable({
    providedIn: 'root'
})
export class ArtistsService {
    API_KEY = 'f9539d1a6a8951490e4b01c3b554f662'; 
     constructor(private http: HttpClient) { }
     public artists : Artist[];
     public idcountry : string = 'germany';

      getArtists(){
            return this.http.get(`https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${this.idcountry}&api_key=${this.API_KEY}&format=json`);
       }
      
       getArtist(name : string){
            return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=${this.API_KEY}&format=json`);
       }

       getTopAlbums(name : string){
        return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&api_key=${this.API_KEY}&format=json`);
       }

       getTopTracks(name : string){
        return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name}&api_key=${this.API_KEY}&format=json`);
       }
    }