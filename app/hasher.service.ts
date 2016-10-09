import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Hasher } from './hasher';

@Injectable()
export class HasherService{
  private baseUrl: string = 'https://hashapppitt.herokuapp.com/hasher';

  constructor(private http : Http){
  }

  getAll(): Observable<Hasher[]>{
    console.log('Test');
    let hasher$ = this.http
      .get(`${this.baseUrl}/all`, {headers: this.getHeaders()})
      .map(mapHashers)
      .catch(handleError);
      return hasher$;
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return headers;
  }
}

function mapHashers(response:Response): Hasher[]{
   // uncomment to simulate error:
   // throw new Error('ups! Force choke!');

   // The response of the API has a results
   // property with the actual results
   return response.json().results.map(toHasher)
}

function toHasher(r:any): Hasher{
  let hasher = <Hasher>({
    hasherId: r.hasherId,
    hashName: r.hashName,
  });
  console.log('Parsed Hasher:', hasher);
  return hasher;
}



function mapHasher(response:Response): Hasher{
  // toPerson looks just like in the previous example
  return toHasher(response.json());
}

// this could also be a private method of the component class
function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Yo shit is broke!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}
