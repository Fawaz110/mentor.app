import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mentors',
  imports: [RouterLink],
  templateUrl: './mentors.component.html',
  styleUrl: './mentors.component.scss'
})
export class MentorsComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private _PLATFORM_ID: Object
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this._PLATFORM_ID)) {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }
  }

}
