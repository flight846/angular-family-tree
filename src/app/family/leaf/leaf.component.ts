import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaf',
  templateUrl: './leaf.component.html',
  styleUrls: ['./leaf.component.css']
})
export class LeafComponent implements OnInit {
  @Input() person: any;

  constructor() { }

  ngOnInit() {
  }

}
