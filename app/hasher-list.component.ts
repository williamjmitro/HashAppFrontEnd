import { Component, OnInit } from '@angular/core';
import { Hasher } from './hasher';
import { HasherService } from './hasher.service';

@Component({
  selector: 'hasher-list',
  template: `
  <section>
    <section *ngIf="isLoading && !errorMessage">
    Loading our hyperdrives!!! Retrieving data...
    </section>
      <ul>
        <!-- this is the new syntax for ng-repeat -->
        <li *ngFor="let hasher of people">
            <a href="#" [routerLink]="['/hasher', hasher.hasherId]">
          {{hasher.hashName}}
          </a>
        </li>
      </ul>
      <section *ngIf="errorMessage">
        {{errorMessage}}
      </section>
  </section>
  `
})
export class HasherListComponent implements OnInit{
  hasher: Hasher[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private hasherService : HasherService){ }


  ngOnInit(){
    this.hasherService
      .getAll() .subscribe(
           /* happy path */ p => this.hasher = p,
           /* error path */ e => this.errorMessage = e,
           /* onComplete */ () => this.isLoading = false);
  }
}
