import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { globals } from '../app/app.globals';
import { Artist } from './artist-search/artist';
import 'rxjs/add/operator/map';

@Injectable()
export class ArtistsService {
  private baseUrl: string = globals['BASE_API_URL'];
  private AuthToken: string = globals['TOKEN'];

  constructor(
    private http: Http
  ) {}

  getArtists(artistName: string): Observable<Artist[]> {
    let url = this.baseUrl + 'search';
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.AuthToken });
    let params = new URLSearchParams();

    params.set('q', artistName);
    params.set('type', 'artist');

    let options = new RequestOptions({ headers: headers, params: params });

    return this.http.get(url, options)
      .map((response: Response) => response.json());
  }
}
