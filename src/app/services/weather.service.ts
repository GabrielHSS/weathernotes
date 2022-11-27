import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private BASE_API_URL = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeatherData(city: string): Observable<any> {
    return this.http.get<any>(
      `${this.BASE_API_URL}?q=${city}&appid=633a0a5aec18d300a700b4d056046046&units=metric`
    );
  }
}
