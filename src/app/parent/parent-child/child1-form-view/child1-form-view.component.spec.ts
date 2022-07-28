import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1FormViewComponent } from './child1-form-view.component';

describe('Child1FormViewComponent', () => {
  let component: Child1FormViewComponent;
  let fixture: ComponentFixture<Child1FormViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child1FormViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Child1FormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
