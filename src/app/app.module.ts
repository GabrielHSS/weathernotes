import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchCityFormComponent } from './components/search-city-form/search-city-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchCityFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
