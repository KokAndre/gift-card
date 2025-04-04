import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public displayUserData = false;
  public userData: any;
  public countDown = 3;
  public countDownInterval: any;

  ngOnInit(): void {
    this.getUserData().then(data => {
      console.log('DATA: ', data);
      this.userData = data;

      this.startCountDown();
    });
  }

  public startCountDown() {
    this.countDownInterval = setInterval(() => {
      this.countDown = --this.countDown;

      if (this.countDown < 0) {
        this.displayPopUp();
      }
    }, 1000);
  }

  public displayPopUp() {
    clearInterval(this.countDownInterval);
    this.displayUserData = true;
  }

  public getUserData() {
    return fetch('https://ipinfo.io/json', {
      method: 'get'
    })
      .then(response => response.json())
      .then(data => {
        return data;
      });
  }
}
