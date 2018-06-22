import { Injectable } from '@angular/core';

export interface SocialIcons {
  imageFile: string,
  alt: string,
  link: string
}

export interface ViewConfigSettings {
  showLanguageSelector?: boolean,
  showUserControls?: boolean,
  showStatusBar?: boolean,
  showStatusBarBreakpoint?: number,
  socialIcons?: Array<SocialIcons>
}

@Injectable({
  providedIn: 'root'
})
export class ViewConfigService {
  showLanguageSelector = true;
  showUserControls = true;
  showStatusBar = true;
  showStatusBarBreakpoint = 0;
  socialIcons = new Array<SocialIcons>();

  configure(settings: ViewConfigSettings) : void {
    Object.assign(this, settings);
  }
}
