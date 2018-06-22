import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewBodyComponent } from 'src/view/view-body/view-body.component';
import { ContentComponent } from 'src/view/content/content.component';
import { HeaderBarComponent } from 'src/view/header-bar/header-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ViewBodyComponent,
    ContentComponent,
    HeaderBarComponent
  ],
  exports: [
    ViewBodyComponent,
    ContentComponent,
    HeaderBarComponent
  ]
})
export class ViewModule { }
