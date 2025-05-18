import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaSeguridadComponent } from './politica-seguridad.component';

describe('PoliticaSeguridadComponent', () => {
  let component: PoliticaSeguridadComponent;
  let fixture: ComponentFixture<PoliticaSeguridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliticaSeguridadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliticaSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
