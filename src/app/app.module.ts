import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { ArticleService } from './service/article.service';
import { ArticleAddFormComponent } from './article-add-form/article-add-form.component';
import { DaysAgoPipe } from './pipes/days-ago.pipe';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { AuthService } from './service/auth.service';

import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationComponent } from './authentication/authentication.component';

const router = [
 
  {path:'article', component: ListArticleComponent},
  {path:'article/add', component: ArticleAddFormComponent},
  {path:'article/:id', component: DetailArticleComponent},
  {path:'login', component: AuthenticationComponent},
  {path:'register', component: AuthenticationComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListArticleComponent,
    ArticleAddFormComponent,
    DaysAgoPipe,
    DetailArticleComponent,
    DashboardComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(router),

  ],
  providers: [
    ArticleService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
