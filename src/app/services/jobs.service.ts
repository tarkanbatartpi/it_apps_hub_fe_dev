import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(public _http: HttpClient) { }

  // function to get third party jobs listing API
  
  getJobs(){
    return this._http.get('https://jsonplaceholder.typicode.com/todos');  
  }

}
