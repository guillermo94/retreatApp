import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {ContactComponent} from '../contact/contact.component';
import {PlaceComponent} from '../place/place.component';
import {ActivitiesComponent} from '../activities/activities.component';
import {BlogComponent} from '../blog/blog.component';
import {NewActivityComponent} from '../admin/new-activity/new-activity.component';
import {EditWelcomeComponent} from '../admin/edit-welcome/edit-welcome.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'home/edit', component: EditWelcomeComponent},
      {path: 'blog', component: BlogComponent},
      {path: 'place', component: PlaceComponent},
      {path: 'activities', component: ActivitiesComponent},
      {path: 'activities/new', component: NewActivityComponent},
      {path: 'contact', component: ContactComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
    ], {enableTracing: true})
  ],
  exports: [RouterModule]
})
export class RoutingModule {
}
