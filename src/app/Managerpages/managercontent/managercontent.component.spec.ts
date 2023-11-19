import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagercontentComponent } from './managercontent.component';

describe('ManagercontentComponent', () => {
  let component: ManagercontentComponent;
  let fixture: ComponentFixture<ManagercontentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagercontentComponent]
    });
    fixture = TestBed.createComponent(ManagercontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
