import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { MaterialsModule } from '../shared/materials.module';
import { ParentAppComponent } from './parent-app/parent-app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

const routes: Routes = [
  {
    path:'', component:ParentAppComponent,
    children:[
      //adding another module here so that it allows me to call sub-components related to admin via admin url base
      {path:'parentChild', loadChildren: () => import('./parent-child/parent-child.module').then(m=>m.ParentChildModule)}
    ]
  }
]

@NgModule({
  declarations: [
    ParentAppComponent,
    SidenavComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialsModule,
    RouterModule.forChild(routes)
  ]
})
export class ParentModule { }
