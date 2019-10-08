import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hours-info',
  templateUrl: './hours-info.component.html',
  styleUrls: ['./hours-info.component.scss']
})
export class HoursInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let servicesTitle = document.getElementById('my-story-title');
    let navBarToggle = document.getElementById('js-navbar-toggle');

    navBarToggle.addEventListener('click', function () {

      servicesTitle.classList.toggle('active');
    });

  }

}
