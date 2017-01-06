import { Routes } from '@angular/router';

import { BlogRoutes } from './blog/blog.routes';
import { ContactRoutes } from './contact/contact.routes';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  ...BlogRoutes,
 ...ContactRoutes
];
