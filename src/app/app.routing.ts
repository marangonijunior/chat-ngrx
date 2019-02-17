import { Routes } from '@angular/router';

import { ChatComponent }   from './chat/chat.component';
import { LoginComponent }   from './login/login.component';
import { AuthGuard } from './auth/auth-guard.service';


export const AppRoutes: Routes = [
  {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
  },
  { path: 'chat', component: ChatComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/login'}

];