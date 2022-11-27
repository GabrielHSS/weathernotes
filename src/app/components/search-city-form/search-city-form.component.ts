import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-city-form',
  templateUrl: './search-city-form.component.html',
  styleUrls: ['./search-city-form.component.sass'],
})
export class SearchCityFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<{ city: string }>();

  searchCityForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.searchCityForm = new FormGroup({
      city: new FormControl('', Validators.required),
    });
  }

  get city() {
    return this.searchCityForm.get('city')!;
  }

  submit() {
    if (this.searchCityForm.invalid) return;
    this.onSubmit.emit(this.searchCityForm.value);
  }
}
