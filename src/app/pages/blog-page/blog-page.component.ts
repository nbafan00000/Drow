import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSwiper([swiper]: [any]) {
  }
  onSlideChange() {
  }
}
