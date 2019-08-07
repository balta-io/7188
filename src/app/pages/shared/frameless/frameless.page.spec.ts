import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FramelessPage } from './frameless.page';

describe('FramelessPage', () => {
  let component: FramelessPage;
  let fixture: ComponentFixture<FramelessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FramelessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FramelessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
