import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShikeishoDetailsComponent } from './shikeisho-details.component';

describe('ShikeishoDetailsComponent', () => {
  let component: ShikeishoDetailsComponent;
  let fixture: ComponentFixture<ShikeishoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShikeishoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShikeishoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
