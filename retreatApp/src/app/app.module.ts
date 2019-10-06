import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {RoutingModule} from './routing/routing.module';
import {ContactComponent} from './contact/contact.component';
import {LayoutModule} from '@angular/cdk/layout';
import {BlogComponent} from './blog/blog.component';
import {PlaceComponent} from './place/place.component';
import {ActivitiesComponent} from './activities/activities.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {CardsContainerModule} from './components/card/cards-container.module';
import {NewActivityComponent} from './admin/new-activity/new-activity.component';
import {EditWelcomeComponent} from './admin/edit-welcome/edit-welcome.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, ContactComponent, BlogComponent, PlaceComponent,
    ActivitiesComponent, DashboardComponent, NewActivityComponent, EditWelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    HttpClientModule,
    RoutingModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    DashboardModule,
    CardsContainerModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
})
export class AppModule {
}
