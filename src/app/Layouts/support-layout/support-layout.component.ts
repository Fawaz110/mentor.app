import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-support-layout',
  imports: [RouterOutlet],
  templateUrl: './support-layout.component.html',
  styleUrl: './support-layout.component.scss'
})
export class SupportLayoutComponent implements OnInit {

  nav_to!: string

  constructor(
    @Inject(PLATFORM_ID) private _PLATFORM_ID: Object,
    private _ActivatedRoute: ActivatedRoute,
    private _Router: Router
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this._PLATFORM_ID)) {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }

    this._ActivatedRoute.queryParams.subscribe(params => {
      console.log('q', params['nav_to']);
      this.nav_to = params['nav_to']
    })
  }

  back = () => this._Router.navigate([this.nav_to]);

}
