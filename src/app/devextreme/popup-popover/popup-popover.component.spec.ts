import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupPopoverComponent } from './popup-popover.component';

describe('PopupPopoverComponent', () => {
  let component: PopupPopoverComponent;
  let fixture: ComponentFixture<PopupPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
