import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancydescriptionComponent } from './vacancydescription.component';

describe('VacancydescriptionComponent', () => {
  let component: VacancydescriptionComponent;
  let fixture: ComponentFixture<VacancydescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VacancydescriptionComponent]
    });
    fixture = TestBed.createComponent(VacancydescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
