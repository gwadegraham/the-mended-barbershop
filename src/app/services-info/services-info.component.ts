import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-info',
  templateUrl: './services-info.component.html',
  styleUrls: ['./services-info.component.scss']
})
export class ServicesInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let servicesTitle = document.getElementById('services-title');
    let navBarToggle = document.getElementById('js-navbar-toggle');

    navBarToggle.addEventListener('click', function () {

      servicesTitle.classList.toggle('active');
    });

  }

}
