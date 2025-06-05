import { Component, Input, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
// import EmblaCarousel from 'embla-carousel'


@Component({
  selector: 'app-image-carousel',
  imports: [
    CarouselModule,
  ],
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.scss'
})
export class ImageCarouselComponent implements OnInit {
  responsiveOptions: any[] | undefined;
  // @Input() postId!: string
  @Input() items: string[] = []


  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 1,
        numScroll: 1
      }
    ]
  }

}
