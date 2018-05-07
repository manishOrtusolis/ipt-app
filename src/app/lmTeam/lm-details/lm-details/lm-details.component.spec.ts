import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmDetailsComponent } from './lm-details.component';

describe('LmDetailsComponent', () => {
  let component: LmDetailsComponent;
  let fixture: ComponentFixture<LmDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
