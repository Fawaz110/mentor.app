import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MentorsComponent } from "../../Components/mentors/mentors.component";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-blank-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MentorsComponent],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.scss'
})
export class BlankLayoutComponent implements OnInit {

  constructor(
    private _Router: Router,
    private _Renderer2: Renderer2,
    private _ElementRef: ElementRef,
    @Inject(PLATFORM_ID) private _PLATFORM_ID: Object
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this._PLATFORM_ID)) {
      console.log("initialized in browser", this._Renderer2);
    }
  }

  /**
   * @description This method is called when the profile button is clicked.
   */
  toggleMenu() {
    const menu = this._ElementRef.nativeElement.querySelector('#user-menu') as HTMLDivElement;
    console.log("user menu toggled", menu);
    if (menu.classList.contains('translate-x-full'))
      menu.classList.remove('translate-x-full');
    else
      menu.classList.add('translate-x-full');
  }

  /**
   * @description This method is called when the search button is clicked.
   */
  startSearch() {
    console.log("Search started");
  }

  /**
   * @description This method is called when the report button is clicked.
   */
  report() {
    this._Router.url

    this._Router.navigate(['/support/report'], {
      queryParams: {
        nav_to: this._Router.url
      }
    })
    console.log("report clicked");
  }

  /**
   * @description This method is called when the logout button is clicked.
   */
  logout() {
    console.log("logged out");
  }
}
