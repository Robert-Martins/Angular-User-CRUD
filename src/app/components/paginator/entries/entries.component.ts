import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss']
})
export class EntriesComponent {

  @Input()
  currentPage!: number;

  @Input()
  entries!: number;

  @Input()
  items!: number;

  constructor() { }

  public get text(): string {
    return `Showing ${this.firstPageItemIndex} to ${this.lastPageItemIndex} of ${this.items} entries`;
  }

  private get firstPageItemIndex(): number {
    return (this.currentPage - 1) * this.entries + 1;
  }

  private get lastPageItemIndex(): number {
    return this.firstPageItemIndex + this.entries;
  }

}
