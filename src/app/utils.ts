import { HttpErrorResponse } from '@angular/common/http';

export function handleError(error: unknown) {
  if (error instanceof HttpErrorResponse) {
    console.error(error.message);
  } else if (typeof error === 'string') {
    console.error(error);
  } else {
    console.error('Erro desconhecido.');
  }
}

export function mapTemperatureToMusicConfig(temperature: number) {
  const temperatureTypesToMusicConfig = {
    HOT: { genre: 'Rock', searchQuery: 'rock' },
    WARM: { genre: 'Pop', searchQuery: 'pop' },
    PLEASANT: { genre: 'Clássico', searchQuery: 'classical' },
    COLD: { genre: 'Lo-fi', searchQuery: 'lofi' },
  };

  let musicOptions = {
    genre: '',
    searchQuery: '',
  };

  if (temperature <= 16) {
    musicOptions = temperatureTypesToMusicConfig.COLD;
  } else if (temperature <= 24) {
    musicOptions = temperatureTypesToMusicConfig.PLEASANT;
  } else if (temperature <= 32) {
    musicOptions = temperatureTypesToMusicConfig.WARM;
  } else if (temperature > 32) {
    musicOptions = temperatureTypesToMusicConfig.HOT;
  } else {
    musicOptions = temperatureTypesToMusicConfig.HOT;
  }

  return musicOptions;
}
