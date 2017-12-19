import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { appRoutingProviders, routing } from './app.routing';
import { AppComponent } from './app.component';
import { NavbarModule } from './shared/navbar';
import { SessionService } from './services/SessionService';
import { SettingsService } from './services/SettingsService';
import { HttpSettingsService } from './services/HttpSettingsService';
import {AuthToken} from "./services/AuthToken";
import {AuthService} from "./Auth/services/auth.service";
import {UserModule} from "./User/module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NavbarModule,
    routing,
    UserModule
  ],
  providers: [
    appRoutingProviders,
    AuthService,
    AuthToken,
    SessionService,
    SettingsService,
    HttpSettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
