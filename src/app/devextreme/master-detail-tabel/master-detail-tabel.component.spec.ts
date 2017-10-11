import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDetailTabelComponent } from './master-detail-tabel.component';

describe('MasterDetailTabelComponent', () => {
  let component: MasterDetailTabelComponent;
  let fixture: ComponentFixture<MasterDetailTabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterDetailTabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterDetailTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
