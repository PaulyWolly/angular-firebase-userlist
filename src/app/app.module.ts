import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule.initializeApp({
      apiKey: "xxxxxxxxxxxxxxxxxxxxxxx",
      authDomain: "js-scrambler-demo-app.firebaseapp.com",
      projectId: "js-scrambler-demo-app",
      storageBucket: "js-scrambler-demo-app.appspot.com",
      messagingSenderId: "xxxxxxxxxxxx",
      appId: "xxxxxxxxxxxxxxxxxxxxxxx"
    }),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
