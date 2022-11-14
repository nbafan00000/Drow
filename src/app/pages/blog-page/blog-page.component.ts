import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSwiper([swiper]: [any]) {
    console.log(swiper);
  }
  
  onSlideChange() {
    console.log('slide change');
  }

  redirectToHeadset() {
    this.router.navigateByUrl('/eeg-headset#pre-order');
  }
}
