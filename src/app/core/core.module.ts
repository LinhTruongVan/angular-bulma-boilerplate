import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './components/app/app.component';

const components = [
  AppComponent
];

@NgModule({
  imports: [CommonModule],
  declarations: [AppComponent],
  exports: [components]
})
export class CoreModule { }
