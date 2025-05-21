import { CurrencyPipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
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
    private _ActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //#region Get id of user from path
    this._ActivatedRoute.params.subscribe(params => {
      this.userId = params['id']
    })
    //#endregion
  }

  toggleFollowing = () => this.following = signal(!this.following()) // Toggle the following state
}
