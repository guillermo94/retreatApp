import {NgModule} from '@angular/core';
import {CardsContainerModule} from '../components/card/cards-container.module';
import {ActivitiesComponent} from './activities.component';

@NgModule({
  imports: [
    CardsContainerModule
  ],
  declarations: [ActivitiesComponent],
  exports: [ActivitiesComponent],
})
export class ActivitiesModule {
}
