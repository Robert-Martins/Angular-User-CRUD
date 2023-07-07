import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output()
  public onChangePage: EventEmitter<any> = new EventEmitter();

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

  public lastPage(): void {
    this.onChange(this.totalPages);
  }

  public previousPage(): void {
    const currentPage = this.pageFormControl.value;
    this.onChange(currentPage - 1);
  }

  public nextPage(): void {
    const currentPage = this.pageFormControl.value;
    this.onChange(currentPage + 1);
  }

  public onChange(page: number): void {
    this.pageFormControl.setValue(page);
    this.onChangePage.emit();
  }

}
