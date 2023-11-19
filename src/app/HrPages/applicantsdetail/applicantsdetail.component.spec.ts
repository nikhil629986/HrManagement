import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantsdetailComponent } from './applicantsdetail.component';

describe('ApplicantsdetailComponent', () => {
  let component: ApplicantsdetailComponent;
  let fixture: ComponentFixture<ApplicantsdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicantsdetailComponent]
    });
    fixture = TestBed.createComponent(ApplicantsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
