import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileSidenavComponent } from './profile-component/profile-sidenav/profile-sidenav.component';
import { ProfileToolbarComponent } from './profile-component/profile-toolbar/profile-toolbar.component';
import { ProfileComponent } from './profile-component/profile/profile.component';
import { MaterialsModule } from './shared/materials.module';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileSidenavComponent,
    ProfileToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
