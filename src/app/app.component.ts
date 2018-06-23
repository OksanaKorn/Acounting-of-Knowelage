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


// <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/2.0.0-beta.3/angular2-all.umd.js"></script>

// ng.core.Component;
// var ViewConfigService = ng.core.ViewConfigService;

// var AppComponent = ng.core
//   .Component({
//     selector: 'app-root',
//     template: `./app.component.html`,
//     style: `./app.component.css`
//   })
//   .Class({
//     constructor: function(_viewConfigService: ViewConfigService) {
//       let config:ViewConfigSettings = {
//         socialIcons: [
//           {imageFile: 'assets/facebook_logo.jpg', alt: 'Facebook', link: 'https://www.facebook.com/'},
//           {imageFile: 'assets/google_logo.jpg', alt: 'google', link: 'https://www.google.com/'},
//           {imageFile: 'assets/twitter_logo.jpg', alt: 'twitter', link: 'https://twitter.com/'}
//         ],
//         showLanguageSelector: true,
//         showUserControls: true,
//         showStatusBar: true,
//         showStatusBarBreakpoint: 800
//       };
//       viewConfigService.configure(config);
//     }
//     }
//   })