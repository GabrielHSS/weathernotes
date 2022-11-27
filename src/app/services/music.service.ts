import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mapTemperatureToMusicConfig } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  private BASE_API_URL = 'https://shazam.p.rapidapi.com/search';

  constructor(private http: HttpClient) {}

  getMusicData(temperature: number): Observable<any> {
    const options = {
      headers: new HttpHeaders()
        .set(
          'x-rapidapi-key',
          '08a909b0damsh94005eda33720f6p17dd1cjsn5be6cda2492e'
        )
        .set('x-rapidapi-host', 'shazam.p.rapidapi.com'),
    };
    const musicConfig = mapTemperatureToMusicConfig(temperature);
    return this.http.get<any>(
      `${this.BASE_API_URL}?term=${musicConfig.searchQuery}&locale=pt-BR&offset=0&limit=5`,
      options
    );
  }
}
