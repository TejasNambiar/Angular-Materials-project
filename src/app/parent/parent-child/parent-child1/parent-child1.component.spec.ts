import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChild1Component } from './parent-child1.component';

describe('ParentChild1Component', () => {
  let component: ParentChild1Component;
  let fixture: ComponentFixture<ParentChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentChild1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
