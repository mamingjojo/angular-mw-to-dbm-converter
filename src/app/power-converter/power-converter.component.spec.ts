import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerConverterComponent } from './power-converter.component';

describe('PowerConverterComponent', () => {
  let component: PowerConverterComponent;
  let fixture: ComponentFixture<PowerConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
