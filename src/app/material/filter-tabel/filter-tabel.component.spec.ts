import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTabelComponent } from './filter-tabel.component';

describe('FilterTabelComponent', () => {
  let component: FilterTabelComponent;
  let fixture: ComponentFixture<FilterTabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterTabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
