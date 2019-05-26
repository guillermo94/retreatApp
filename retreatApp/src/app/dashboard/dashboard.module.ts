import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminActivityListComponent } from './admin-activity-list/admin-activity-list.component';
import { AdminAddActivityComponent } from './admin-add-activity/admin-add-activity.component';
import { AdminEditActivityComponent } from './admin-edit-activity/admin-edit-activity.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [AdminActivityListComponent, AdminAddActivityComponent, AdminEditActivityComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'admin',
        children: [
          {
            path: '', component: DashboardComponent,
          },
          {
            path: 'activities', component: AdminActivityListComponent,
            children: [
              { path: 'edit/:id', component: AdminEditActivityComponent },
              { path: 'add', component: AdminAddActivityComponent }]
          },
        ]
      },

    ])
  ],
  exports: [
    AdminActivityListComponent, AdminAddActivityComponent, AdminEditActivityComponent
  ]
})
export class DashboardModule { }
