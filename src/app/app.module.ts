import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ROUTEUR } from './app.routes';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserComponent,
    SignUpComponent,
    UserComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTEUR)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
