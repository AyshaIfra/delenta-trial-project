import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { MainCardsComponent } from './main-cards/main-cards.component';
import { UpcomingSessionComponent } from './upcoming-session/upcoming-session.component';
import { ActivitiesComponent } from './activities/activities.component';
import { MessageCoachComponent } from './message-coach/message-coach.component';
import { NgbModule,NgbCollapseModule,NgbNavModule, NgbProgressbarModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    MainComponent,
    HeaderNavigationComponent,
    HeaderSectionComponent,
    MainCardsComponent,
    UpcomingSessionComponent,
    ActivitiesComponent,
    MessageCoachComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgbCollapseModule,
    NgbModule,
    NgbNavModule,
    NgbProgressbarModule

  ]
})
export class MainModule { }
