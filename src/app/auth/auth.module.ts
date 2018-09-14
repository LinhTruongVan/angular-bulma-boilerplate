import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { SigninPageComponent } from './containers/signin-page/signin-page.component';

@NgModule({
  imports: [SharedModule, AuthRoutingModule],
  declarations: [SigninPageComponent]
})
export class AuthModule {}
