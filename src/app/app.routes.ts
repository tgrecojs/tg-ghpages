import { Routes } from '@angular/router';

import { BlogRoutes } from './blog/blog.routes';
import { ContactRoutes } from './contact/contact.routes';

export const routes: Routes = [
  ...BlogRoutes,
  ...ContactRoutes
];
