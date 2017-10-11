import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightLeftTabelComponent } from './right-left-tabel.component';

describe('RightLeftTabelComponent', () => {
  let component: RightLeftTabelComponent;
  let fixture: ComponentFixture<RightLeftTabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightLeftTabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightLeftTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
