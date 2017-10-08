import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDevextremeComponent } from './home-devextreme.component';

describe('HomeDevextremeComponent', () => {
  let component: HomeDevextremeComponent;
  let fixture: ComponentFixture<HomeDevextremeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDevextremeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDevextremeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
