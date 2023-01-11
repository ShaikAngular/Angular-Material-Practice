import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AppMaterialModule } from './app.material.module';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { Test3Component } from './test3/test3.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test3Component,
    Test1Component,
    Test2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule
   
  ],
  exports:[MatButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
