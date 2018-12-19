import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-culture-allegorical',
  templateUrl: './culture-allegorical.component.html',
  styleUrls: ['./culture-allegorical.component.css']
})
export class CultureAllegoricalComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public result: JSON;

  public allegorical: JSON;

  ngOnInit() {
    this.http.get('yywebsite/yy/allegoricalRandom').subscribe(res => {this.result = <JSON>res; });
    // this.allegorical = this.result.
  }

}
