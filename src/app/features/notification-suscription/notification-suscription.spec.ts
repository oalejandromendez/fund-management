import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationSuscription } from './notification-suscription';

describe('NotificationSuscription', () => {
  let component: NotificationSuscription;
  let fixture: ComponentFixture<NotificationSuscription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationSuscription]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationSuscription);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
