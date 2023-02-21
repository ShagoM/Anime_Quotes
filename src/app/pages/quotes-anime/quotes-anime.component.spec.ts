import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesAnimeComponent } from './quotes-anime.component';

describe('QuotesAnimeComponent', () => {
  let component: QuotesAnimeComponent;
  let fixture: ComponentFixture<QuotesAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesAnimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
