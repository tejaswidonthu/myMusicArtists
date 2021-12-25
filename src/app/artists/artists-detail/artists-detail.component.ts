import { analyzeAndValidateNgModules } from '@angular/compiler';
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
  artist : Artist;
  idname : string;
  data : any;
  bio : any;
  artName : string;
  artSummary : string;
  artListeners : string;
  artPlaycount : string;
  artUrl : string;
  artAlbums : string[];
  artTracks : string[];

  stats : string;
  subscription : Subscription;
  constructor(private artistService : ArtistsService,
    private route: ActivatedRoute) { }

    // this.subscription = this.artistsService.getArtist(this.id).subscribe(
    //   (data)=>{
    //     console.log(data['topartists']);
    //     this.articles = data['topartists'];        
    //     this.artists = this.articles['artist'];
    //     this.artistsService.artists = this.artists;
    //     //console.log(this.artists);
    //   }
    // );  
    ngOnInit() {
      this.route.params.subscribe(
        (params:Params)=>{
          console.log(params);
          this.idname = params['id'];
          console.log(this.idname);
           this.subscription = this.artistService.getArtist(this.idname).subscribe(
             (data)=>{
              this.setArtistInfo(data);             
      }
      );
      this.subscription = this.artistService.getTopAlbums(this.idname).subscribe(
        (data)=>{          
          const albums = data['topalbums'];
          const albumNames = albums['album'];
           const albumList  = [];
          for(let ar of albumNames){
            let wkday: string = ar['name']; 
            albumList.push(wkday);
          }
          this.artAlbums = albumList.splice(0,10,albumList.length);
 }
 );
 this.subscription = this.artistService.getTopTracks(this.idname).subscribe(
  (data)=>{    
    console.log(data);      
    const track = data['toptracks'];
    const trackNames = track['track'];
    const trackList  = [];
    for(let ar of trackNames){
      let wkday: string = ar['name']; 
      trackList.push(wkday);
    }
    this.artTracks = trackList.splice(0,10,trackList.length);
}
);
 
    });
}


    setArtistInfo(data : any){
      this.data = data['artist'];
              this.bio = this.data['bio'];
              this.stats = this.data['stats'];
      
      this.artName = this.data['name'];
      this.artSummary = this.bio['summary'];
      this.artPlaycount = this.stats['playcount'];
      this.artListeners = this.stats['listeners'];
      this.artUrl = this.data['url'];
    }


}
