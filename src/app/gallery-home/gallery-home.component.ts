import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-gallery-home',
  templateUrl: './gallery-home.component.html',
  styleUrls: ['./gallery-home.component.scss']
})
export class GalleryHomeComponent implements OnInit {

  loadScript(src){
    var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src = src;
  }

  constructor() { }

  ngOnInit( ) {

    this.loadScript("../../assets/js/lightbox.js");

    const images = document.querySelectorAll('[data-src]');
    const config = {
      rootMargin: '0px 0px 50px 0px',
      threshold: 0
    };
    let loaded = 0;

    let observer = new IntersectionObserver(function (entries, self) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // console.log(`Image ${entry.target.src} is in the viewport!`);
          preloadImage(entry.target);
          // Stop watching and load the image
          self.unobserve(entry.target);
        }
      });
    }, config);

    images.forEach(image => {
      observer.observe(image);
    });

    function preloadImage(img) {
      const src = img.getAttribute('data-src');
      if (!src) { return; }
      img.src = src;
      _updateMonitoring();
    }
  }



}




