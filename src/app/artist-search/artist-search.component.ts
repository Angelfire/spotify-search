import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../artists.service';
import { Artist } from './artist';

@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.scss'],
  providers: [ArtistsService]
})
export class ArtistSearchComponent implements OnInit {
  artists: Artist[];

  constructor(private service: ArtistsService) { }

  ngOnInit() {
    this.service.getArtists('Nirvana').subscribe(artists =>
      this.artists = artists);
  }

}
