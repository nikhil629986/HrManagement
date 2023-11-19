import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrPersonalprofileComponent } from './hr-personalprofile.component';

describe('HrPersonalprofileComponent', () => {
  let component: HrPersonalprofileComponent;
  let fixture: ComponentFixture<HrPersonalprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HrPersonalprofileComponent]
    });
    fixture = TestBed.createComponent(HrPersonalprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
