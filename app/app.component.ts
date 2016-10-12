import { Component } from '@angular/core';
import { PeopleService } from './people.service';
import { HasherService } from './hasher.service';

@Component({
  selector: 'my-app',
  template: `
  <body class="light-blue darken-1">
  <h1><b> {{title}} </b></h1>
  <router-outlet>
  `,
  providers: [PeopleService, HasherService]
})
export class AppComponent {
  title:string = 'Hashers!';
}
