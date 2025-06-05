import { CurrencyPipe, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [CurrencyPipe, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

  userId!: string
  following = signal(false)

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    @Inject(PLATFORM_ID) private _PLATFORM_ID: Object
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this._PLATFORM_ID)) {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }

    //#region Get id of user from path
    this._ActivatedRoute.params.subscribe(params => {
      this.userId = params['id']
    })
    //#endregion
  }

  /**
   * @description This method called when following button clickedto toggle state.
   */
  toggleFollowing = () => this.following = signal(!this.following()) // Toggle the following state
}
