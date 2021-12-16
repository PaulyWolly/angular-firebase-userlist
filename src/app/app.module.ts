import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatPaginatorModule,
    MatTableDataSource,
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
    AngularFirestoreModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
