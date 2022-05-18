import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionesComponentComponent } from './promociones-component.component';

describe('PromocionesComponentComponent', () => {
  let component: PromocionesComponentComponent;
  let fixture: ComponentFixture<PromocionesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromocionesComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocionesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
