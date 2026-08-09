import { Routes } from '@angular/router';

import { PublicLayoutComponent } from './layout/public/public-layout/public-layout.component';
import { AUTH_ROUTES } from './features/auth/auth.routes';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: AUTH_ROUTES
  }
];