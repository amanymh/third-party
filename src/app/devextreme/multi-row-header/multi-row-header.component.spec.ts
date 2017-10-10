import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiRowHeaderComponent } from './multi-row-header.component';

describe('MultiRowHeaderComponent', () => {
  let component: MultiRowHeaderComponent;
  let fixture: ComponentFixture<MultiRowHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiRowHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiRowHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
