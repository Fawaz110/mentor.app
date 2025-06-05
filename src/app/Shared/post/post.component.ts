import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post } from '../../Core/Interfaces/interfaces';
import { ImageCarouselComponent } from "../image-carousel/image-carousel.component";

@Component({
  selector: 'app-post',
  imports: [RouterLink, ImageCarouselComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  @Input() post!: Post
}
