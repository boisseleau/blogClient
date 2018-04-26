import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles(){
   return this.http.get('http://localhost:8000/api/article')
                   .map(res =>  res);
  }
}
