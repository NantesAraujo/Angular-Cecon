import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cecon-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  secondsToRedirect = 5;

  constructor(private router: Router) { }

  ngOnInit(): void {
    document.querySelector('.cont_principal').className= "cont_principal cont_error_active";  

    let that = this;

    setInterval(function () {
      that.secondsToRedirect--;

      if (that.secondsToRedirect === 0) {
        that.router.navigate(['home']);
      }
    }, 1000);
  }
}