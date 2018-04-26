import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {  FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-article-add-form',
  templateUrl: './article-add-form.component.html',
  styleUrls: ['./article-add-form.component.css']
})
export class ArticleAddFormComponent implements OnInit {

form: FormGroup;
loading: boolean = false;
headers: HttpHeaders;
picture: File = null;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', undefined);
   }

  ngOnInit() {
    this.form = new FormGroup({
      picture: new FormControl(),
      title:new FormControl(),
      content: new FormControl(),
    })
  }

  upload(event) {
    if(event.target.files && event.target.files.length > 0) {
      this.picture = event.target.files[0];
    }  
}

onSubmit() {
  const formModel = this.form.value;
  const formData: FormData = new FormData();
  formData.append('picture',this.picture, this.picture.name)
  formData.append('title',this.form.value.title)
  formData.append('content',this.form.value.content)
  this.loading = true;
  this.http.post('http://localhost:8000/api/article/add?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiYWRtaW4iOnRydWUsImlhdCI6MTUyNDIzMDAwOSwiZXhwIjoxNTI0MjM3MjA5fQ.cHHj12BJmsyLvXz44aQR0agw_1mLzihIUx1FqgcGSKI', formData, {
    headers: this.headers

}).subscribe(res => console.log('response !!!!!!!',res));
}




}
