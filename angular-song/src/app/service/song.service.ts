import { Injectable } from '@angular/core';
import {Song} from "../model/song";

@Injectable({
  providedIn: 'root'
})
export class SongService {
  songs: Song[] = [
    {
      id: 'CX11yw6YL1w',
      name: 'Céline Dion - Ashes (from the Deadpool 2 Motion Picture Soundtrack)'
    },
    {
      id: 'HBYirj2c_jw',
      name: 'Deadpool 2 - Take on Me'
    },
    {
      id: 'N6O2ncUKvlg',
      name: 'Nelly - Just A Dream'
    },
    {
      id: 'uelHwf8o7_U',
      name: 'Eminem - Love The Way You Lie ft. Rihanna'
    },
    {
      id: 'WpYeekQkAdc',
      name: 'The Black Eyed Peas - Where Is The Love?'
    },
    {
      id: 'STQ4hoQYcMk',
      name: 'The Ara Ara that killed 90,000 viewers...'
    },
    {
      id: 'DU0IeW9BCzY',
      name: '【Goodbye Declaration】Takanashi Kiara Song Cover【グッバイ宣言】'
    }
  ];
  constructor() { }

  findSongById(id: string | null) {
    return this.songs.find(item => item.id === id);
  }
}
