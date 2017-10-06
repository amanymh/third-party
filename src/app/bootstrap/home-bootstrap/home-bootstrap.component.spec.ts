import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBootstrapComponent } from './home-bootstrap.component';

describe('HomeBootstrapComponent', () => {
  let component: HomeBootstrapComponent;
  let fixture: ComponentFixture<HomeBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
