// import { Injectable } from '@angular/core';
// import { Http, Headers, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
//
// import { Hasher } from '../models/hasher';
//
// @Injectable()
// export class HasherService{
//
//     private hasherUrl = "https://hashapppitt.herokuapp.com/hasher/all";
//
//   constructor(private http: Http) { }
//
//   getHashers(): Observable<Hasher[]> {
//       return this.http
//           .get(this.hasherUrl)
//           .map(this.extractData);
//   }
//
//   getHasher(): Observable<Hasher> {
//       return this.getHashers()
//           .map(hasher => hasher.filter(hasher => hasher.hasherId === hasherId)[0]);
//   }
//
//   private extractData(res: Response) {
//       return res.json() || [];
//   }
// }
