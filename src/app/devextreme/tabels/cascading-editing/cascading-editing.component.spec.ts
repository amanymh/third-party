import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CascadingEditingComponent } from './cascading-editing.component';

describe('CascadingEditingComponent', () => {
  let component: CascadingEditingComponent;
  let fixture: ComponentFixture<CascadingEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CascadingEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CascadingEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
