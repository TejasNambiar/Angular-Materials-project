import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialsModule } from 'src/app/shared/materials.module';
import { ParentChild1Component } from './parent-child1/parent-child1.component';
import { ParentChild2Component } from './parent-child2/parent-child2.component';
import { Child1TableViewComponent } from './child1-table-view/child1-table-view.component';
import { Child1FormViewComponent } from './child1-form-view/child1-form-view.component';

export const routes:Routes = [
  {path:'1', component:ParentChild1Component},
  {path:'2', component:ParentChild2Component}
]

@NgModule({
  declarations: [
    ParentChild1Component,
    ParentChild2Component,
    Child1TableViewComponent,
    Child1FormViewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialsModule,
    RouterModule.forChild(routes)
  ]
})
export class ParentChildModule { }
