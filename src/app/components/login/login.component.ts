import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  mainPage = '/main'

  constructor(private router: Router ) { }

  ngOnInit() {
  }

  goNext(){
    this.router.navigate([this.mainPage]);
  }

}
