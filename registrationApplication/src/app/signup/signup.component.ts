import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private _router: Router, private _http: HttpClient,) { }

  ngOnInit(): void {
  }

  // popup to show data submitted
  onSubmit() {
    console.log('clicked');

    const contentHeader = new HttpHeaders({
      //passing header for post request
      'Content-Type': 'application/json',
    });

    this._http
      .post('https://httpbin.org/post', { headers: contentHeader }) //calling dummy post request
      .subscribe((res) => {
        console.log('Navigated');
      });

  }
}
