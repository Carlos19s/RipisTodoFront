import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacidadDeCoockiesComponent } from './privacidad-de-coockies.component';

describe('PrivacidadDeCoockiesComponent', () => {
  let component: PrivacidadDeCoockiesComponent;
  let fixture: ComponentFixture<PrivacidadDeCoockiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacidadDeCoockiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivacidadDeCoockiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
