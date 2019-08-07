import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FramePage } from './frame.page';

describe('FramePage', () => {
  let component: FramePage;
  let fixture: ComponentFixture<FramePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FramePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FramePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
