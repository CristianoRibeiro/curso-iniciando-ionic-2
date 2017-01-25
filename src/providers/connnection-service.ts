import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ConnnectionService {

  constructor(public http: Http) {
    console.log('Hello ConnnectionService Provider');
  }

  getCep(cep: string): Promise<Response> {
      return this.http.get('https://viacep.com.br/ws/'+ cep.trim() +'/json/').toPromise()
      //.then(res => res.json(), err => console.log(err));
  }

}
