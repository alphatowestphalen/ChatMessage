import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/env/environement';
import * as bcrypt from 'bcryptjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

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

  login(data:any){    
    return this._http.post(this.url + '/users/login', data)
  }

  // encoder Mdp
  async encodePassword(password: string): Promise<string> {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }
  
}
