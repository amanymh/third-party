import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevtabsComponent } from './devtabs.component';

describe('DevtabsComponent', () => {
  let component: DevtabsComponent;
  let fixture: ComponentFixture<DevtabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevtabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevtabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
