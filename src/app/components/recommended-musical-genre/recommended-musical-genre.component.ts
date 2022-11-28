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

  addMusicToStoragePlaylist(music: MusicItem) {
    music.savedIn = new Date().toLocaleDateString('pt-BR');

    const playlistStorageData = getJSONFromlocalStorage('musicPlaylist');

    if (playlistStorageData.length > 0) {
      const hasThisMusicOnStorage = playlistStorageData.some(
        (playlistStorageItem) => {
          return playlistStorageItem.key === music.key;
        }
      );

      if (hasThisMusicOnStorage)
        return console.log('O item já existe em sua playlist');

      playlistStorageData.unshift(music);

      localStorage.setItem(
        'musicPlaylist',
        `${JSON.stringify(playlistStorageData)}`
      );
    } else {
      localStorage.setItem('musicPlaylist', `[${JSON.stringify(music)}]`);
    }

    const newPlaylist = this.musicPlaylist.filter(
      (playlistItem) => playlistItem.key !== music.key
    );

    this.musicPlaylist = newPlaylist;
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
  isMusicOnPlaylist(music: MusicItem) {
    const localStoragePlaylist = getJSONFromlocalStorage('musicPlaylist');
    if (localStoragePlaylist && localStoragePlaylist.length > 0) {
      return localStoragePlaylist.some(
        (playlistItem) => playlistItem.key === music.key
      );
    }
    return;
  }
}
