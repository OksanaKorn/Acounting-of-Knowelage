import { Component, OnInit } from '@angular/core';
import { ViewConfigService } from 'src/view/services/view-config.service';

@Component({
  selector: 'view-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private viewConfigService: ViewConfigService) { }

  ngOnInit() {
  }

}
