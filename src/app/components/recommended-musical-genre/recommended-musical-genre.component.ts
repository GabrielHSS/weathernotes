import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';
import { Hit, MusicData, WeatherData } from 'src/app/types';
import { handleError, mapTemperatureToMusicConfig } from 'src/app/utils';

@Component({
  selector: 'app-recommended-musical-genre',
  templateUrl: './recommended-musical-genre.component.html',
  styleUrls: ['./recommended-musical-genre.component.sass'],
})
export class RecommendedMusicalGenreComponent implements OnInit, OnChanges {
  @Input() weatherData!: WeatherData;

  musicPlaylist!: Hit[];
  genre!: string;
  isLoading = false;

  constructor(private musicService: MusicService) {}

  ngOnInit() {}
  ngOnChanges() {
    const temperature = this.weatherData.main.temp;
    console.log(temperature);
    this.genre = mapTemperatureToMusicConfig(temperature).genre;
    this.fetchMusicData(temperature);
    console.log(this.isLoading);
  }

  fetchMusicData(temperature: number) {
    this.isLoading = true;
    this.musicService.getMusicData(temperature).subscribe({
      next: (data: MusicData) => {
        const hits = data.tracks.hits;
        this.musicPlaylist = Object.values(hits);
      },
      error: handleError,
      complete: () => {
        this.genre = mapTemperatureToMusicConfig(temperature).genre;
        this.isLoading = false;
      },
    });
  }
}
