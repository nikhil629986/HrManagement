import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffboardingComponent } from './offboarding.component';

describe('OffboardingComponent', () => {
  let component: OffboardingComponent;
  let fixture: ComponentFixture<OffboardingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffboardingComponent]
    });
    fixture = TestBed.createComponent(OffboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
