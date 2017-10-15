import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnResizeComponent } from './column-resize.component';

describe('ColumnResizeComponent', () => {
  let component: ColumnResizeComponent;
  let fixture: ComponentFixture<ColumnResizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnResizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnResizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
