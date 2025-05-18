import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificacionActividadesComponent } from './planificacion-actividades.component';

describe('PlanificacionActividadesComponent', () => {
  let component: PlanificacionActividadesComponent;
  let fixture: ComponentFixture<PlanificacionActividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanificacionActividadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanificacionActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
