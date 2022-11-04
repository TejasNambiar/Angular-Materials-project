import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile-component/profile/profile.component';

const routes: Routes = [
  {path:'admin', loadChildren: () => import('./parent/parent.module').then(m => m.ParentModule) },
  {path:'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
  {path:'profile', component: ProfileComponent },
  {path:'**', redirectTo:'admin'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
