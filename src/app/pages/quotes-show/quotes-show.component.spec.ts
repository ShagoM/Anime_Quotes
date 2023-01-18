import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesShowComponent } from './quotes-show.component';

describe('QuotesShowComponent', () => {
  let component: QuotesShowComponent;
  let fixture: ComponentFixture<QuotesShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
