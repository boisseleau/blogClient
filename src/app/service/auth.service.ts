import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
BASE_URL = 'http://localhost:8000/api/login'
headers:HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    console.log(this.headers)
  }

  login(credentials){
    console.log(credentials)
    //const formData: FormData = new FormData();
    //formData.append('email',credentials.email)
    //formData.append('password', credentials.password)
    //console.log(formData)
    
    return this.http.post(this.BASE_URL, credentials)
                    .map(res => res);
  }

}
