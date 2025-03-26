import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CDComponent } from './cd/cd.component';
import { HeaderComponent } from './header/header.component';
import { ListeCDComponent } from './liste-cd/liste-cd.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { NewCDComponent } from './new-cd/new-cd.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CDComponent,
    HeaderComponent,
    ListeCDComponent,
    HomeComponent,
    NewCDComponent,
    HttpClient
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
