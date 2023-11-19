import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackNewApplicantsComponent } from './track-new-applicants.component';

describe('TrackNewApplicantsComponent', () => {
  let component: TrackNewApplicantsComponent;
  let fixture: ComponentFixture<TrackNewApplicantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackNewApplicantsComponent]
    });
    fixture = TestBed.createComponent(TrackNewApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
