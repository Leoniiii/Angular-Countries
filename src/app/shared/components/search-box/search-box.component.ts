import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Input() placeholder = ''
  @Output() onValue = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  sendInputValue(term: string): void {

    this.onValue.emit(term)
  }


}
