import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUpdateNewComponent } from './product-update-new.component';

describe('ProductUpdateNewComponent', () => {
  let component: ProductUpdateNewComponent;
  let fixture: ComponentFixture<ProductUpdateNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductUpdateNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUpdateNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
