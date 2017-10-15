import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltringComponent } from './filtring.component';

describe('FiltringComponent', () => {
  let component: FiltringComponent;
  let fixture: ComponentFixture<FiltringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
