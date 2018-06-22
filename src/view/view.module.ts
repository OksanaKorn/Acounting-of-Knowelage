import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewBodyComponent } from 'src/view/view-body/view-body.component';
import { ContentComponent } from 'src/view/content/content.component';
import { HeaderBarComponent } from 'src/view/header-bar/header-bar.component';
import { ViewConfigService } from 'src/view/services/view-config.service';
import { TopBarComponent } from 'src/view/top-bar/top-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ViewBodyComponent,
    ContentComponent,
    HeaderBarComponent,
    TopBarComponent
  ],
  providers: [
    ViewConfigService
  ],
  exports: [
    ViewBodyComponent,
  ]
})
export class ViewModule { }
