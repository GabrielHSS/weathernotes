import { Component, Input } from '@angular/core';
import { WeatherData } from 'src/app/types';

@Component({
  selector: 'app-city-weather-info',
  templateUrl: './city-weather-info.component.html',
  styleUrls: ['./city-weather-info.component.sass'],
})
export class CityWeatherInfoComponent {
  @Input() weatherData!: WeatherData;
}
