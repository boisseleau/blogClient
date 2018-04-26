import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../service/auth.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
resLogin = [];
  constructor(private http: HttpClient, private authService: AuthService) {
   }

  ngOnInit() {
  }

  login(formData){
    this.authService.login(formData)
                    .subscribe(
                      data => console.log(data)/*this.handleLoginSuccess*/,
                      error => console.log(error)/*this.handleLoginFailure*/
                    )
  }

  handleLoginSuccess(data){
    console.log('success', data);
  }

  handleLoginFailure(error){
    console.log('failure', error);
  }

}
