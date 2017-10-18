import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEditingComponent } from './list-editing.component';

describe('ListEditingComponent', () => {
  let component: ListEditingComponent;
  let fixture: ComponentFixture<ListEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
