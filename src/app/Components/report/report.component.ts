import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report',
  imports: [],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent implements OnInit {

  constructor(
    private _ActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Get the query parameters from the route
    this._ActivatedRoute.queryParams.subscribe(params => {
      console.log(params);
    });
  }
}
