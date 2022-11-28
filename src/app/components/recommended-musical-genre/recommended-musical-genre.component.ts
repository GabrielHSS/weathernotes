import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';
import { MusicData, MusicItem, WeatherData } from 'src/app/types';
import {
  getJSONFromlocalStorage,
  handleError,
  mapTemperatureToMusicConfig,
} from 'src/app/utils';

@Component({
  selector: 'app-recommended-musical-genre',
  templateUrl: './recommended-musical-genre.component.html',
  styleUrls: ['./recommended-musical-genre.component.sass'],
})
export class RecommendedMusicalGenreComponent implements OnInit, OnChanges {
  @Input() weatherData!: WeatherData;

  musicPlaylist!: MusicItem[];
  genre!: string;
  isLoading = false;

  constructor(private musicService: MusicService) {}

  ngOnInit() {}
  ngOnChanges() {
    const temperature = this.weatherData.main.temp;
    this.genre = mapTemperatureToMusicConfig(temperature).genre;
    this.fetchMusicData(temperature);
  }

  getItem(item: MusicItem) {
    const playlistStorage = getJSONFromlocalStorage('musicPlaylist');

    if (playlistStorage.length > 0) {
      const hasKeyOnStorage = playlistStorage.some((playlistStorageItem) => {
        return playlistStorageItem.key === item.key;
      });

      if (hasKeyOnStorage)
        return console.log('O item já existe em sua playlist');

      playlistStorage.push(item);
      localStorage.setItem(
        'musicPlaylist',
        `${JSON.stringify(playlistStorage)}`
      );
    } else {
      localStorage.setItem('musicPlaylist', `[${JSON.stringify(item)}]`);
    }
  }

  fetchMusicData(temperature: number) {
    this.isLoading = true;
    this.musicService.getMusicData(temperature).subscribe({
      next: (data: MusicData) => {
        const hits = data.tracks.hits;
        const playlist = hits.map((item) => {
          const {
            images: { coverart },
            title,
            subtitle,
            key,
          } = item.track;
          return {
            image: coverart,
            title,
            subtitle,
            key,
          };
        });

        this.musicPlaylist = playlist;
      },
      error: handleError,
      complete: () => {
        this.genre = mapTemperatureToMusicConfig(temperature).genre;
        this.isLoading = false;
      },
    });
  }
}
