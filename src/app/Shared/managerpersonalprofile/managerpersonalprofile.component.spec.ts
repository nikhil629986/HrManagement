import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerpersonalprofileComponent } from './managerpersonalprofile.component';

describe('ManagerpersonalprofileComponent', () => {
  let component: ManagerpersonalprofileComponent;
  let fixture: ComponentFixture<ManagerpersonalprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerpersonalprofileComponent]
    });
    fixture = TestBed.createComponent(ManagerpersonalprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
