import { Component } from '@angular/core';
import { PeopleService } from './people.service';
import { HasherService } from './hasher.service';

@Component({
  selector: 'app-root',
  template: `
  <body class="blue-grey">
  <h1><b> {{title}} </b></h1>
  <router-outlet>
  `,
  providers: [PeopleService, HasherService]
})
export class AppComponent {
  title:string = 'Hashers!';
}
