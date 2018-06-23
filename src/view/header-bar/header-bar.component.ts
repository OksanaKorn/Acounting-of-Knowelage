import { Component, OnInit } from '@angular/core';
import { ScreenService } from 'src/view/services/screen.service';

@Component({
  selector: 'view-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  constructor(private screenService: ScreenService) { }

  ngOnInit() {
  }

}
