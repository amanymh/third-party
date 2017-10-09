import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditingComponent } from './form-editing.component';

describe('FormEditingComponent', () => {
  let component: FormEditingComponent;
  let fixture: ComponentFixture<FormEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
