import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { ArticleService} from '../service/article.service';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {

  articles;
  error = '';

  constructor(private http: HttpClient, private ArticleService: ArticleService) { }

  ngOnInit() {
    this.ArticleService.getArticles()
                       .subscribe(
                         data => this.articles = data,
                         error => {
                           console.error(error);
                           this.error = error;
                         }
                       );
  }

}
