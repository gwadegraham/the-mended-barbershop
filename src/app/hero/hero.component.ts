import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface, SwiperAutoplayInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  
  

  constructor() { }

  ngOnInit() {
    
  }
  
  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 1,
    // keyboard: true,
    // mousewheel: true,
    // scrollbar: false,
    pagination: true,
    autoplay: {
        delay: 4000,
        stopOnLastSlide: false
    },
    speed: 1000,
  };
  
  public slides = [
    "../../assets/images/hero.jpg",
    "../../assets/images/IMG_5721.jpg",
    "../../assets/images/IMG_5711.jpg"
  ];


}
