import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1TableViewComponent } from './child1-table-view.component';

describe('Child1TableViewComponent', () => {
  let component: Child1TableViewComponent;
  let fixture: ComponentFixture<Child1TableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child1TableViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Child1TableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
