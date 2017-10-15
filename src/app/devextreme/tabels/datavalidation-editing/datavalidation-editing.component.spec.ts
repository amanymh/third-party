import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatavalidationEditingComponent } from './datavalidation-editing.component';

describe('DatavalidationEditingComponent', () => {
  let component: DatavalidationEditingComponent;
  let fixture: ComponentFixture<DatavalidationEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatavalidationEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatavalidationEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
