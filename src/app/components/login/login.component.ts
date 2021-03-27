import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  mainPage = '/portal'

  constructor(private router: Router ) { }

  ngOnInit() {
  }

  goNext(){
    this.router.navigate([this.mainPage]);
  }

}
