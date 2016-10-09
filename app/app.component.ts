import { Component } from '@angular/core';
import { PeopleService } from './people.service';
import { HasherService } from './hasher.service';

@Component({
  selector: 'my-app',
  template: `
  <h1> {{title}} </h1>
  <router-outlet>
  `,
  providers: [PeopleService, HasherService]
})
export class AppComponent {
  title:string = 'Hashers!';
}
