import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Artist } from '../artists/artist.model';

@Injectable({
    providedIn: 'root'
})
export class ArtistsService {

    API_KEY = 'f9539d1a6a8951490e4b01c3b554f662'; /* This is my LastFm registered API key*/
    public artists: Artist[];
    public artistsNames: string[];
    public idcountry: string = 'germany';

    constructor(private http: HttpClient) { }

    /*Function to get Top Artists from API, currently getting 200 records*/
    getTopArtistsNames() {
        return this.http.get(`https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&limit=200&api_key=${this.API_KEY}&format=json`);
    }

    /*Function to get Top Artists in selected Region from API, currently getting 10 records*/
    getArtists() {
        return this.http.get(`https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${this.idcountry}&limit=10&api_key=${this.API_KEY}&format=json`);
    }

    /*Function to get specific Artist details with name from API*/
    getArtist(name: string) {
        return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=${this.API_KEY}&format=json`);
    }

    /*Function to get specific Artist Top Albums with name from API, currently getting 5 records*/
    getTopAlbums(name: string) {
        return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&limit=5&api_key=${this.API_KEY}&format=json`);
    }

    /*Function to get specific Artist Top Tracks with name from API, currently getting 5 records*/
    getTopTracks(name: string) {
        return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name}&limit=5&api_key=${this.API_KEY}&format=json`);
    }
}