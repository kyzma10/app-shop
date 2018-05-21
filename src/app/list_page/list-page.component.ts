import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { DataService } from "../services/data.service";

@Component({
  selector: 'list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ListPage implements OnInit {
  @Input() data: DataService = new DataService();

  ngOnInit() {
    console.log(this.data.getData());
  }
}
