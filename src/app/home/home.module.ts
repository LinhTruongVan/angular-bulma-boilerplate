import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './containers/home-page/home-page.component';

@NgModule({
  imports: [SharedModule, HomeRoutingModule],
  declarations: [HomePageComponent]
})
export class HomeModule {}
