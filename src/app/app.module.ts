import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

const config = {
  apiKey: "AIzaSyDBze9ZQ3Oemh_NyU56dFDkd2W4IiQSGvM",
    authDomain: "navigus--docs-presence.firebaseapp.com",
    databaseURL: "https://navigus--docs-presence.firebaseio.com",
    projectId: "navigus--docs-presence",
    storageBucket: "navigus--docs-presence.appspot.com",
    messagingSenderId: "771887337538",
    appId: "1:771887337538:web:c6cf1be8e79013aade1ddb",
    measurementId: "G-5Z5T1QJC5M"

};
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [AppComponent, UserComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}