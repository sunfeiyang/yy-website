import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-culture-famous',
  templateUrl: './culture-famous.component.html',
  styleUrls: ['./culture-famous.component.css']
})
export class CultureFamousComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public famous: JSON;

  ngOnInit() {
    this.http.get('yywebsite/yy/famousRandom').subscribe(res => {this.famous = <JSON>res; });
  }

}
