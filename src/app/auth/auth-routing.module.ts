import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninPageComponent } from './containers/signin-page/signin-page.component';

const routes: Routes = [{ path: 'signin', component: SigninPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
