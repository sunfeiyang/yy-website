import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-culture-idiom',
  templateUrl: './culture-idiom.component.html',
  styleUrls: ['./culture-idiom.component.css']
})
export class CultureIdiomComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public idiom: JSON;

  ngOnInit() {
    this.http.get('yywebsite/yy/idiomRandom').subscribe(res => {this.idiom = <JSON>res; });
  }

}
