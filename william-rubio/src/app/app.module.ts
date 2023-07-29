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
import { NgIconsModule } from '@ng-icons/core';
import { octRepo } from '@ng-icons/octicons';
import { ProjectGithubComponent } from './project-github/project-github.component';
import { bootstrapEnvelope, bootstrapEnvelopeFill, bootstrapEnvelopeOpenFill, bootstrapGithub, bootstrapLinkedin } from '@ng-icons/bootstrap-icons';
import { ionMailOpen } from '@ng-icons/ionicons';
import { heroEnvelopeOpenSolid } from '@ng-icons/heroicons/solid'
import { featherGithub, featherLinkedin, featherMail } from '@ng-icons/feather-icons';
import { AstrophotoComponent } from './astrophoto/astrophoto.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageEnComponent,
    FirstTitleComponent,
    HeaderComponent,
    ExperienceMainComponent,
    ProjectsMainComponent,
    FeaturedMainComponent,
    MiscMainComponent,
    ProjectGithubComponent,
    AstrophotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({octRepo, bootstrapEnvelope, bootstrapLinkedin, bootstrapGithub, 
      bootstrapEnvelopeFill, bootstrapEnvelopeOpenFill, heroEnvelopeOpenSolid,
      featherMail, featherLinkedin, featherGithub
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
