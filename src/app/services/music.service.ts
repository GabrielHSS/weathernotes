import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MusicData } from '../types';
import { mapTemperatureToMusicConfig } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  private BASE_API_URL = 'https://shazam.p.rapidapi.com/search';
  private X_RAPID_API_KEY =
    '08a909b0damsh94005eda33720f6p17dd1cjsn5be6cda2492e';

  constructor(private http: HttpClient) {}

  getMusicData(temperature: number): Observable<MusicData> {
    const options = {
      headers: new HttpHeaders()
        .set('x-rapidapi-key', this.X_RAPID_API_KEY)
        .set('x-rapidapi-host', 'shazam.p.rapidapi.com'),
    };
    const musicConfig = mapTemperatureToMusicConfig(temperature);
    return this.http.get<MusicData>(
      `${this.BASE_API_URL}?term=${musicConfig.searchQuery}&locale=pt-BR&offset=0&limit=5`,
      options
    );
  }
}
