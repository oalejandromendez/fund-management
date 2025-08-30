import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fund } from './fund';

describe('Fund', () => {
  let component: Fund;
  let fixture: ComponentFixture<Fund>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fund]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fund);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
