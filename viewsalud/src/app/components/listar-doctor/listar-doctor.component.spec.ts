import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDoctorComponent } from './listar-doctor.component';

describe('ListarDoctorComponent', () => {
  let component: ListarDoctorComponent;
  let fixture: ComponentFixture<ListarDoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarDoctorComponent]
    });
    fixture = TestBed.createComponent(ListarDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
