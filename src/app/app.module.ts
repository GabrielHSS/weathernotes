import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchCityFormComponent } from './components/search-city-form/search-city-form.component';
import { RecommendedMusicalGenreComponent } from './components/recommended-musical-genre/recommended-musical-genre.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, SearchCityFormComponent, RecommendedMusicalGenreComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
