import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  {path: '', component:ClientComponent}
]


@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class ClientModule { }
