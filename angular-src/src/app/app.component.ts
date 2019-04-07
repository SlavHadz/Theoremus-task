import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  _trucksUrl = 'http://localhost:3000/trucks';

  trucksInformation;

  constructor(private http: HttpClient){}

  getTrucks(){
    return this.http.get<any>(this._trucksUrl);
  }

  ngOnInit(){
    this.getTrucks().subscribe((response) => {
      this.trucksInformation = JSON.parse(response.trucks);
      console.log(this.trucksInformation);
    },
    error => {
      console.error(error);
    })
  }
}
