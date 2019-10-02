import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {



  }

  ngOnInit() {
    let mainNav = document.getElementById('js-menu');
    let navBarToggle = document.getElementById('js-navbar-toggle');
    let serviceLink = document.getElementById('services-link');
    let storyLink = document.getElementById('story-link');
    let galleryLink = document.getElementById('gallery-link');

    navBarToggle.addEventListener('click', function () {

      mainNav.classList.toggle('active');
    });

    storyLink.addEventListener('click', function() {
      mainNav.classList.toggle('active');
    });

    galleryLink.addEventListener('click', function() {
      mainNav.classList.toggle('active');
    });

    serviceLink.addEventListener('click', function() {
      mainNav.classList.toggle('active');
    });

  }

}


