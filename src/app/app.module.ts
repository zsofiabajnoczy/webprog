import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore'
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { ImageModalComponent } from './image-modal/image-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HtmlComponent,
    CssComponent,
    BootstrapComponent,
    JavascriptComponent,
    PageNotFoundComponent,
    ImageModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
