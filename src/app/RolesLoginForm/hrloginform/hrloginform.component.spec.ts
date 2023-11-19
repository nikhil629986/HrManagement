import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrloginformComponent } from './hrloginform.component';

describe('HrloginformComponent', () => {
  let component: HrloginformComponent;
  let fixture: ComponentFixture<HrloginformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HrloginformComponent]
    });
    fixture = TestBed.createComponent(HrloginformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
