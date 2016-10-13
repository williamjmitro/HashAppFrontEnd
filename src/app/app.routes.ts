import { Routes, RouterModule } from '@angular/router';

import { PeopleListComponent } from './people-list.component';
import { PersonDetailsComponent } from './person-details.component';

import { HasherListComponent } from './hasher-list.component';

// Route config let's you map routes to components
const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'persons',
    component: PeopleListComponent,
  },
  // map '/persons/:id' to person details component
  {
    path: 'persons/:id',
    component: PersonDetailsComponent
  },
  // map '/' to '/persons' as our default route
  // {
  //   path: '',
  //   redirectTo: '/persons',
  //   pathMatch: 'full'
  // },
  // map '/persons' to the people list component
  {
    path: '',
    component: HasherListComponent,
    pathMatch: 'full'
  },
];

export const routing = RouterModule.forRoot(routes);
