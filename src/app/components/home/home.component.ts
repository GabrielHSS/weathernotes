import { Component } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherData } from 'src/app/types';
import { handleError } from 'src/app/utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  weatherData: WeatherData | null = null;

  constructor(private weatherService: WeatherService) {}

  submitEventHandler({ city }: { city: string }) {
    this.weatherService.getWeatherData(city).subscribe({
      next: (data) => (this.weatherData = { ...data }),
      error: handleError,
    });
  }
}
