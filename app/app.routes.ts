import { Routes } from '@angular/router';

import { BlogRoutes } from './blogroll/index';
import { ContactRoutes } from './contact/index';

export const routes: Routes = [
  ...BlogRoutes,
  ...ContactRoutes
];
