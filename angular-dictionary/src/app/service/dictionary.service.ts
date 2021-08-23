import {Injectable} from '@angular/core';
import {IWord} from '../model/iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  public words: IWord[] = [
    {key: 'red', mean: 'Màu đỏ'},
    {key: 'White', mean: 'Màu trắng'},
    {key: 'black', mean: 'Màu Đen'},
    {key: 'yellow', mean: 'Màu vàng'},
    {key: 'blue', mean: 'Màu Xanh Da Trời'},
    {key: 'green', mean: 'Màu Xanh Lá Cây'},
  ];

  constructor() {
  }

  search(word: string | null): string {
    if (!word) {
      return '';
    }
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.words.length; i++) {
      console.log(this.words[i].key)
      if (this.words[i].key == word) {
        // @ts-ignore
        return this.words[i].mean;
      }
    }
    return 'Not found';
  }

  getAll() {
    return this.words;
  }
}
