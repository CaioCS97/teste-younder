import { Component, OnInit } from '@angular/core';

import { NgxTinySliderSettingsInterface } from 'ngx-tiny-slider';

@Component({
  selector: 'app-landing-page',
  templateUrl: 'landing-page.component.html',
  styleUrls: ['../../assets/styles/main/landing-page.scss'],
})
export class LandingPageComponent implements OnInit {
  config: NgxTinySliderSettingsInterface;

  ngOnInit() {
    this.config = {
      arrowKeys: true,
      autoWidth: true,
      gutter: 100,
      controls: false,
      autoplay: true,
      autoplayButtonOutput: false,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      nav: false,
    };
  }
}
