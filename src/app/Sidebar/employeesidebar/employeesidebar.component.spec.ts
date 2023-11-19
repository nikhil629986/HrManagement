import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesidebarComponent } from './employeesidebar.component';

describe('EmployeesidebarComponent', () => {
  let component: EmployeesidebarComponent;
  let fixture: ComponentFixture<EmployeesidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesidebarComponent]
    });
    fixture = TestBed.createComponent(EmployeesidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
