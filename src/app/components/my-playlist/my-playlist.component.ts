import { Component, OnChanges, OnInit } from '@angular/core';
import { MusicItem } from 'src/app/types';
import { getJSONFromlocalStorage } from 'src/app/utils';

@Component({
  selector: 'app-my-playlist',
  templateUrl: './my-playlist.component.html',
  styleUrls: ['./my-playlist.component.sass'],
})
export class MyPlaylistComponent implements OnInit, OnChanges {
  playlist: MusicItem[] = [];

  ngOnInit(): void {
    this.handlePlaylistItems();
  }
  ngOnChanges(): void {
    this.handlePlaylistItems();
  }

  handlePlaylistItems() {
    if (getJSONFromlocalStorage('musicPlaylist')) {
      this.playlist = getJSONFromlocalStorage('musicPlaylist') as MusicItem[];
    }
  }
  removeItem(music: MusicItem) {
    const newPlaylist = getJSONFromlocalStorage('musicPlaylist').filter(
      (playlistItem) => playlistItem.key !== music.key
    );
    localStorage.setItem('musicPlaylist', JSON.stringify(newPlaylist));
    this.playlist = newPlaylist;
  }
  deletePlaylist() {
    localStorage.removeItem('musicPlaylist');
    this.playlist = [];
  }
}
