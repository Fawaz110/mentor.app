import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { PostComponent } from "../../Shared/post/post.component";
import { Post } from '../../Core/Interfaces/interfaces';

@Component({
  selector: 'app-discover',
  imports: [PostComponent],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.scss'
})
export class DiscoverComponent implements OnInit {

  posts: Post[] = [
    { id: 'post-1', date: '11/11/2023', likes: 20, user: 'asdasd', caption: 'asdasd', images: ['assets/cover.jpg', 'assets/cover.jpg', 'assets/cover.jpg'] },
    { id: 'post-2', date: '11/11/2023', likes: 20, user: 'asdasd', caption: 'asdasd', images: ['assets/cover.jpg', 'assets/cover.jpg', 'assets/cover.jpg'] },
    { id: 'post-3', date: '11/11/2023', likes: 20, user: 'asdasd', caption: 'asdasd', images: ['assets/cover.jpg', 'assets/cover.jpg', 'assets/cover.jpg'] },
    { id: 'post-4', date: '11/11/2023', likes: 20, user: 'asdasd', caption: 'asdasd', images: ['assets/cover.jpg', 'assets/cover.jpg', 'assets/cover.jpg'] },
  ]

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
