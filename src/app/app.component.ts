import { Component } from '@angular/core';

import { ViewConfigService, ViewConfigSettings } from 'src/view/services/view-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private viewConfigService: ViewConfigService) {
    let config:ViewConfigSettings = {
      socialIcons: [
        {imageFile: 'assets/facebook_logo.jpg', alt: 'Facebook', link: 'https://www.facebook.com/'},
        {imageFile: 'assets/google_logo.jpg', alt: 'google', link: 'https://www.google.com/'},
        {imageFile: 'assets/twitter_logo.jpg', alt: 'twitter', link: 'https://twitter.com/'}
      ],
      showLanguageSelector: true,
      showUserControls: true,
      showStatusBar: true,
      showStatusBarBreakpoint: 800
    };
    viewConfigService.configure(config);
  }
}