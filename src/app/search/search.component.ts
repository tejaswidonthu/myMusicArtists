import { Component, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() artistNames: any;
  @HostBinding('class.open') isOpen = false;

  constructor(private elRef: ElementRef) { }

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isSearchShow = false;
  }
  searchText = ""
  isSearchShow = false;

  ngOnInit(): void {
  }

  onChangeEvent() {
    this.isSearchShow = true;
  }

  onSearchClose() {
    this.searchText = ""
    this.isSearchShow = false;
  }

}
