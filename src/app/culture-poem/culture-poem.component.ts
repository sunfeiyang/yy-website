import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-culture-poem',
  templateUrl: './culture-poem.component.html',
  styleUrls: ['./culture-poem.component.css']
})
export class CulturePoemComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public poem: JSON;

  ngOnInit() {
    this.http.get('yywebsite/yy/poemRandom').subscribe(res => {this.poem = <JSON>res; });
  }

}
