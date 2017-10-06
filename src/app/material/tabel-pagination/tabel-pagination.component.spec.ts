import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelPaginationComponent } from './tabel-pagination.component';

describe('TabelPaginationComponent', () => {
  let component: TabelPaginationComponent;
  let fixture: ComponentFixture<TabelPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
