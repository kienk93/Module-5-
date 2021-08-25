import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-test-material',
  templateUrl: './test-material.component.html',
  styleUrls: ['./test-material.component.scss']
})
export class TestMaterialComponent implements OnInit {
  key: string;
  constructor() { }

  ngOnInit(): void {
  }

}
