import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';

let ROUTEUR: Routes = [
  { path: 'user-profile', component: UserComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '', component: UserComponent },
];

export { ROUTEUR };
