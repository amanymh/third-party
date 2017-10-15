import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BathEditingComponent } from './bath-editing.component';

describe('BathEditingComponent', () => {
  let component: BathEditingComponent;
  let fixture: ComponentFixture<BathEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BathEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BathEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
