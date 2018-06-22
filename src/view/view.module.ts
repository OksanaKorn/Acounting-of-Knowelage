import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewBodyComponent } from 'src/view/view-body/view-body.component';
import { ContentComponent } from 'src/view/content/content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ViewBodyComponent,
    ContentComponent
  ],
  exports: [
    ViewBodyComponent,
    ContentComponent
  ]
})
export class ViewModule { }
