import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {

  @Input()
  public totalPages!: number;

  @Input()
  public pageFormControl!: FormControl;

  constructor() { }

  public get isLastPage(): boolean {
    return this.totalPages === this.pageFormControl.value;
  }

  public get isFirstPage(): boolean {
    return this.pageFormControl.value === 1;
  }

  public get currentPage(): number {
    return this.pageFormControl.value;
  }

  public set page(page: number) {
    this.pageFormControl.setValue(page);
  }

  public pageUp(): void {
    const currentPage = this.pageFormControl.value;
    this.pageFormControl.setValue(currentPage + 1);
  }

  public pageDown(): void {
    const currentPage = this.pageFormControl.value;
    this.pageFormControl.setValue(currentPage - 1);
  }

}
