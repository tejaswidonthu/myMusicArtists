import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../../artist.model';

@Component({
  selector: 'app-artists-single',
  templateUrl: './artists-single.component.html',
  styleUrls: ['./artists-single.component.css']
})
export class ArtistsSingleComponent implements OnInit {
@Input() artist : Artist;
@Input() index : string;
data : any;
imgData : any;
  constructor() { }

  ngOnInit(): void {
    this.data = this.artist.image[3];
    this.imgData = this.data['#text']
  }

}
