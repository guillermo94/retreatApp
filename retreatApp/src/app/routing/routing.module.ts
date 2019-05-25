import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { PlaceComponent } from '../place/place.component';
import { ActivitiesComponent } from '../activities/activities.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'blog', component: ContactComponent },
      { path: 'place', component: PlaceComponent },
      { path: 'activities', component: ActivitiesComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ], { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
