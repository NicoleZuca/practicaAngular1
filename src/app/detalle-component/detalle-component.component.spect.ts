import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleComponentComponent } from './detalle-component.component';

describe('ActualizaComponentComponent', () => {
  let component: DetalleComponentComponent;
  let fixture: ComponentFixture<DetalleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
