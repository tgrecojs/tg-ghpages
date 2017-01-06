import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { SharedModule } from './shared/shared.module';
import { BlogModule } from './blogroll/blog.module';
import { ContactModule } from './contact/contact.module';
import { PageNotFoundModule } from './404/404.module';


import { AngularFireModule } from 'angularfire2';

const firebaseConfig = {
    apiKey: 'AIzaSyDHQ3eNg7a9deTlKVXn5CYoyBXNL334rFA',
    authDomain: 'angular2-a66d7.firebaseapp.com',
    databaseURL: 'https://angular2-a66d7.firebaseio.com',
    storageBucket: 'angular2-a66d7.appspot.com',
    messagingSenderId: '659317321966'
};



/**
 * Main application module loading modules.
 */
@NgModule({
  imports: [BrowserModule, HttpModule,
  AngularFireModule.initializeApp(firebaseConfig),
  RouterModule.forRoot(routes),
  BlogModule,
  ContactModule,
  PageNotFoundModule,
  SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})

export class AppModule { }
