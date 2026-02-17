import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ComicListComponent } from './comics/comic-list/comic-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpModule } from '@angular/http';
import { ComicService } from './services/comic.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './library/library.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { StoresComponent } from './stores/stores.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'stores', component: StoresComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ComicListComponent,
    DashboardComponent,
    SidebarComponent,
    LibraryComponent,
    SettingsComponent,
    ProfileComponent,
    StoresComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    ComicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }