import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortTabelComponent } from './sort-tabel.component';

describe('SortTabelComponent', () => {
  let component: SortTabelComponent;
  let fixture: ComponentFixture<SortTabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortTabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
