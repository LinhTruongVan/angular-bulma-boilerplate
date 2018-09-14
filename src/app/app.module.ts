import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './core/components/app/app.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  imports: [BrowserModule, CoreModule, AuthModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
