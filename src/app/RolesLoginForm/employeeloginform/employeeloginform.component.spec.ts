import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeloginformComponent } from './employeeloginform.component';

describe('EmployeeloginformComponent', () => {
  let component: EmployeeloginformComponent;
  let fixture: ComponentFixture<EmployeeloginformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeloginformComponent]
    });
    fixture = TestBed.createComponent(EmployeeloginformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
