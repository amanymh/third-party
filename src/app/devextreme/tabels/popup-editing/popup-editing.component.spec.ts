import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEditingComponent } from './popup-editing.component';

describe('PopupEditingComponent', () => {
  let component: PopupEditingComponent;
  let fixture: ComponentFixture<PopupEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
