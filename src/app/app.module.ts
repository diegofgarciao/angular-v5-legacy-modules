import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ComicListComponent } from './comics/comic-list/comic-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpModule } from '@angular/http';
import { ComicService } from './services/comic.service';

@NgModule({
  declarations: [
    AppComponent,
    ComicListComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    ComicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }