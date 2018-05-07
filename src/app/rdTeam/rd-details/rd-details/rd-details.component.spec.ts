import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdDetailsComponent } from './rd-details.component';

describe('RdDetailsComponent', () => {
  let component: RdDetailsComponent;
  let fixture: ComponentFixture<RdDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
