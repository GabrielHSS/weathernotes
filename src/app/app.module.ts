import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RecommendedMusicalGenreComponent } from './components/recommended-musical-genre/recommended-musical-genre.component';
import { SearchCityFormComponent } from './components/search-city-form/search-city-form.component';
import { MyPlaylistComponent } from './components/my-playlist/my-playlist.component';
import { CityWeatherInfoComponent } from './components/city-weather-info/city-weather-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchCityFormComponent,
    RecommendedMusicalGenreComponent,
    MyPlaylistComponent,
    CityWeatherInfoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
