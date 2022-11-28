import { Component, OnInit } from '@angular/core';
import { MusicItem } from 'src/app/types';
import { getJSONFromlocalStorage } from 'src/app/utils';

@Component({
  selector: 'app-my-playlist',
  templateUrl: './my-playlist.component.html',
  styleUrls: ['./my-playlist.component.sass'],
})
export class MyPlaylistComponent implements OnInit {
  playlist: MusicItem[] = [];
  ngOnInit(): void {
    if (getJSONFromlocalStorage('musicPlaylist')) {
      this.playlist = getJSONFromlocalStorage('musicPlaylist') as MusicItem[];
    }
  }
}
