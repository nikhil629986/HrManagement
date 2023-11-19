import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyforleaveComponent } from './applyforleave.component';

describe('ApplyforleaveComponent', () => {
  let component: ApplyforleaveComponent;
  let fixture: ComponentFixture<ApplyforleaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyforleaveComponent]
    });
    fixture = TestBed.createComponent(ApplyforleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
