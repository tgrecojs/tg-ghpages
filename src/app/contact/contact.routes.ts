import { Route, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';

export const ContactRoutes: Route[] = [
  {
    path: 'contact-me',
    component: ContactComponent
  }
];

export default RouterModule.forRoot(ContactRoutes);
