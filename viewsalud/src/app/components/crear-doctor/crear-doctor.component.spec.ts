import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDoctorComponent } from './crear-doctor.component';

describe('CrearDoctorComponent', () => {
  let component: CrearDoctorComponent;
  let fixture: ComponentFixture<CrearDoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearDoctorComponent]
    });
    fixture = TestBed.createComponent(CrearDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
