import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedMusicalGenreComponent } from './recommended-musical-genre.component';

describe('RecommendedMusicalGenreComponent', () => {
  let component: RecommendedMusicalGenreComponent;
  let fixture: ComponentFixture<RecommendedMusicalGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendedMusicalGenreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendedMusicalGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
