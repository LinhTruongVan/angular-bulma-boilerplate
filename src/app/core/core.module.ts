import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const components = [AppComponent, NotFoundPageComponent];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: components,
  exports: components
})
export class CoreModule {}
