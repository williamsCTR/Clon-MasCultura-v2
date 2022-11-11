import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QueEsComponent } from './components/que-es/que-es.component';
import { WallComponent } from './components/wall/wall.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogosComponent } from './components/logos/logos.component';
import { TengoMasCulturaComponent } from './components/tengo-mas-cultura/tengo-mas-cultura.component';
import { OferentesCulturalesComponent } from './components/oferentes-culturales/oferentes-culturales.component';
import { NovedadesComponent } from './components/novedades/novedades.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    QueEsComponent,
    WallComponent,
    FooterComponent,
    LogosComponent,
    TengoMasCulturaComponent,
    OferentesCulturalesComponent,
    NovedadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
