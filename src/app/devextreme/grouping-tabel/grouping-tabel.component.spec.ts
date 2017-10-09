import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupingTabelComponent } from './grouping-tabel.component';

describe('GroupingTabelComponent', () => {
  let component: GroupingTabelComponent;
  let fixture: ComponentFixture<GroupingTabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupingTabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupingTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
