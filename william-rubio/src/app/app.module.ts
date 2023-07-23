import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageEnComponent } from './main-page-en/main-page-en.component';
import { FirstTitleComponent } from './first-title/first-title.component';
import { HeaderComponent } from './header/header.component';
import { ExperienceMainComponent } from './experience-main/experience-main.component';
import { ProjectsMainComponent } from './projects-main/projects-main.component';
import { FeaturedMainComponent } from './featured-main/featured-main.component';
import { MiscMainComponent } from './misc-main/misc-main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageEnComponent,
    FirstTitleComponent,
    HeaderComponent,
    ExperienceMainComponent,
    ProjectsMainComponent,
    FeaturedMainComponent,
    MiscMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
