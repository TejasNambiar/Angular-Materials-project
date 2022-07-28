import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChild2Component } from './parent-child2.component';

describe('ParentChild2Component', () => {
  let component: ParentChild2Component;
  let fixture: ComponentFixture<ParentChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentChild2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
