import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageCoachComponent } from './message-coach.component';

describe('MessageCoachComponent', () => {
  let component: MessageCoachComponent;
  let fixture: ComponentFixture<MessageCoachComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageCoachComponent]
    });
    fixture = TestBed.createComponent(MessageCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
