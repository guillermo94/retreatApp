import {NgModule} from '@angular/core';
import {CardsContainerComponent} from './cards-container.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule],
  declarations: [CardsContainerComponent],
  exports: [CardsContainerComponent],
})
export class CardsContainerModule {
}
