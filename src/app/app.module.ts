import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { ChatComponent } from './chat/chat.component';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { CreatCompteComponent } from './creat-compte/creat-compte.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Page404Component,
    ChatComponent,
    CreatCompteComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
