import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenecytComponent } from './senecyt.component';

describe('SenecytComponent', () => {
  let component: SenecytComponent;
  let fixture: ComponentFixture<SenecytComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenecytComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenecytComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
