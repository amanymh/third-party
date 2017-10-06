import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortheaderTabelComponent } from './sortheader-tabel.component';

describe('SortheaderTabelComponent', () => {
  let component: SortheaderTabelComponent;
  let fixture: ComponentFixture<SortheaderTabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortheaderTabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortheaderTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
