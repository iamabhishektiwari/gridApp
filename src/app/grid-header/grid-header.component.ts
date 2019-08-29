import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-header',
  templateUrl: './grid-header.component.html',
  styleUrls: ['./grid-header.component.css']
})
export class GridHeaderComponent implements OnInit {
  title = "Header";
  @Input() herolist = []
  constructor() { }

  ngOnInit() {
  }

}
