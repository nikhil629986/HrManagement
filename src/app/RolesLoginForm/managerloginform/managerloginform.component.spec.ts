import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerloginformComponent } from './managerloginform.component';

describe('ManagerloginformComponent', () => {
  let component: ManagerloginformComponent;
  let fixture: ComponentFixture<ManagerloginformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerloginformComponent]
    });
    fixture = TestBed.createComponent(ManagerloginformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
