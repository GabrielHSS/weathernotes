import { MusicItem } from '../types';

export function getJSONFromlocalStorage(itemName: string): MusicItem[] {
  const item = localStorage.getItem(itemName);
  if (item) {
    return JSON.parse(item);
  }
  return [];
}
