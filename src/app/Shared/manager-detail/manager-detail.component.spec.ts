import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerDetailComponent } from './manager-detail.component';

describe('ManagerDetailComponent', () => {
  let component: ManagerDetailComponent;
  let fixture: ComponentFixture<ManagerDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerDetailComponent]
    });
    fixture = TestBed.createComponent(ManagerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
