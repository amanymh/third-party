import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallMaterialComponent } from './install-material.component';

describe('InstallMaterialComponent', () => {
  let component: InstallMaterialComponent;
  let fixture: ComponentFixture<InstallMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
