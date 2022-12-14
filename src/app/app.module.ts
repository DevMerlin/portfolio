import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartupComponent } from './pages/startup/startup.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ProjectComponent } from './elements/project/project.component';
import { PiktogramicComponent } from './projects/piktogramic/piktogramic.component';
import { PacketpopComponent } from './projects/packetpop/packetpop.component';
import { FuseengineComponent } from './projects/fuseengine/fuseengine.component';

@NgModule({
  declarations: [
    AppComponent,
    StartupComponent,
    MainComponent,
    ProjectComponent,
    PiktogramicComponent,
    PacketpopComponent,
    FuseengineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }