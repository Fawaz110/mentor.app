import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  imports: [],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss'
})
export class PostDetailsComponent implements OnInit {
  loading = signal(true)

  constructor(
    private _ActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe(params => {
      console.log('post id: ', params['id']);
    })
  }

}
