import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../types';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private BASE_API_URL = 'https://api.openweathermap.org/data/2.5/weather';
  private APP_ID = '633a0a5aec18d300a700b4d056046046';

  constructor(private http: HttpClient) {}

  getWeatherData(city: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(
      `${this.BASE_API_URL}?q=${city}&appid=${this.APP_ID}&units=metric`
    );
  }
}
