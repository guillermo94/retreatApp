import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { PlaceComponent } from '../place/place.component';
import { ActivitiesComponent } from '../activities/activities.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AdminActivityListComponent } from '../dashboard/admin-activity-list/admin-activity-list.component';
import { AdminEditActivityComponent } from '../dashboard/admin-edit-activity/admin-edit-activity.component';
import { AdminAddActivityComponent } from '../dashboard/admin-add-activity/admin-add-activity.component';
import { BlogComponent } from '../blog/blog.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'blog', component: ContactComponent },
      { path: 'place', component: PlaceComponent },
      { path: 'activities', component: ActivitiesComponent },
      { path: 'contact', component: ContactComponent },
      // {
      //   path: 'admin', component: DashboardComponent,
      //   children: [
      //     { path: 'activities', component: AdminActivityListComponent, 
      //     children: [
      //       { path: 'edit/:id', component: AdminEditActivityComponent },
      //       { path: 'add', component: AdminAddActivityComponent }]
      //   },
      //     { path: 'blog', component: BlogComponent },
      //   ]
      // },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ], { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
