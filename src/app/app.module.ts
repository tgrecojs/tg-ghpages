import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { JsonpModule, HttpModule } from '@angular/http';
import { BlogModule } from './blog/blog.module';
import { ContactModule } from './contact/contact.module';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes }  from './app.routes';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularFireModule } from 'angularfire2';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';


const firebaseConfig = {
    apiKey: 'AIzaSyDHQ3eNg7a9deTlKVXn5CYoyBXNL334rFA',
    authDomain: 'angular2-a66d7.firebaseapp.com',
    databaseURL: 'https://angular2-a66d7.firebaseio.com',
    storageBucket: 'angular2-a66d7.appspot.com',
    messagingSenderId: '659317321966'
};


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes),
    BlogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
