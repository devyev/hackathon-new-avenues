import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './/app-routing.module';
import { ManageComponent } from './manage/manage.component';
import { SearchComponent } from './search/search.component';
import { TestComponent } from './test/test.component';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment.prod';
import { ProgramsComponent } from './programs/programs.component';
import { ProgramService } from './program.service';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';

import { ProgramDetailComponent } from './program-detail/program-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WelcomeComponent,
    ManageComponent,
    SearchComponent,
    TestComponent,
    ProgramsComponent,
    ProgramDetailComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [ProgramService],
  bootstrap: [AppComponent]
})
export class AppModule { }
