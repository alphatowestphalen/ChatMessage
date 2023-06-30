import { Injectable } from '@angular/core';
import { environment } from 'src/env/environement';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as bcrypt from 'bcryptjs';


@Injectable({
  providedIn: 'root'
})
export class CreateService {

  private url = environment.url

constructor(
  private _http: HttpClient
) { }

// Http Headers
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

 creat(data: any){
  return this._http.post (
    this.url + '/users', data
  )
 }
  

}
