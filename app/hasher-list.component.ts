import { Component, OnInit } from '@angular/core';
import { Hasher } from './objects/hasher';
import { HasherService } from './hasher.service';

@Component({
  selector: 'hasher-list',
  templateUrl: 'app/html/hash-list.component.html'
})
export class HasherListComponent implements OnInit{
  hashers: Hasher[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private hasherService : HasherService){ }


  ngOnInit(){
    this.hasherService
      .getAll().subscribe(
           /* happy path */ p => this.hashers = p,
           /* error path */ e => this.errorMessage = e,
           /* onComplete */ () => this.isLoading = false);
  }
}
