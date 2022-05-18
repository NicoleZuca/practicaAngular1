import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoHijoCComponent } from './producto-hijo-c.component';

describe('ProductoHijoCComponent', () => {
  let component: ProductoHijoCComponent;
  let fixture: ComponentFixture<ProductoHijoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoHijoCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoHijoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
