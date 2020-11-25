import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FamilyComponent } from './family/family.component';
import { LeafComponent } from './family/leaf/leaf.component';


@NgModule({
  declarations: [
    AppComponent,
    FamilyComponent,
    LeafComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
