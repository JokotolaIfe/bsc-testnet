import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { Web3Service } from './web3.service';
import {HttpClientModule} from '@angular/common/http'
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    FooterComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    Web3Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
