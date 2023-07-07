import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Paginator } from 'src/app/models/paginator.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public filtered: User[] = [];

  readonly possibleEntries: number[] = [ 5, 10, 20 ];

  public pageFormControl!: FormControl;

  public entryFormControl!: FormControl;

  public searchFormControl!: FormControl;

  public pageSortBy: 'ASC' | 'DESC' = 'ASC';

  public paginator!: Paginator;

  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createFormControls();
    this.loadData();
  }

  public get items(): number {
    return this.paginator.items;
  }

  public get searchFor(): string {
    return this.searchFormControl.value;
  }

  public get totalPages(): number {
    return this.paginator.totalPages;
  }

  public get entries(): number {
    return this.entryFormControl.value;
  }

  public get currentPage(): number {
    return this.pageFormControl.value;
  }

  public get isListEmpty(): boolean {
    return this.filtered?.length === 0;
  }

  public setPageOrderAndSort(order: 'id' | 'email' | 'username') {
    this.paginator.orderBy = order;
    this.pageSortBy = this.pageSortBy === 'ASC' ? 'DESC' : 'ASC';
    this.loadDataOrdered(order);
  }

  public onAddUser(): void {
    this.userService.openForm(new User());
  }

  public onViewUser(user: User): void {
    this.userService.openForm(user, true);
  }

  public onEditUser(user: User): void {
    this.userService.openForm(user);
  }

  public onDeleteUser(userId: number): void {
    this.userService.delete(userId);
    this.loadData();
  }

  public onChangePaginator(): void {
    this.loadData();
  }

  private loadData(): void {
    this.filtered = this.userService.findAll();
    this.paginator = new Paginator(
      this.filtered.length,
      this.entryFormControl.value,
      this.pageFormControl.value,
    );
    this.filterData();
  }
  
  private loadDataOrdered(order: 'id' | 'email' | 'username'): void {
    this.filtered = this.userService.findAll();
    this.paginator = new Paginator(
      this.filtered.length,
      this.entryFormControl.value,
      this.pageFormControl.value,
      this.pageSortBy,
      order
    );
    this.filterData();
  }

  private filterData(): void {
    const sliceFactor = this.paginator.entries * (this.paginator.currentPage - 1);
    this.filtered = this.filtered
      .filter(user => this.searchFor == '' || user.username.match(this.searchFor))
      .sort((x, y) => this.sortUsers(x, y))
      .slice(sliceFactor, sliceFactor + this.paginator.entries);
  }

  private sortUsers(a: User, b: User) {
    const field = this.paginator.orderBy;
    const valueA = this.getField(a, field);
    const valueB = this.getField(b, field);

    return this.paginator.sortBy === 'ASC' 
    ? 
      this.compareValues(valueA, valueB) 
    : 
      this.compareValues(valueB, valueA)
    ;
  }

  private getField(user: User, field: 'id' | 'email' | 'username'): any {
    switch (field) {
      case 'id':
        return user.id;
      case 'email':
        return user.email;
      case 'username':
        return user.username;
      default:
        return null;
    }
  }
  
  private compareValues(valueA: any, valueB: any): number {
    if (valueA < valueB) {
      return -1;
    } else if (valueA > valueB) {
      return 1;
    } else {
      return 0;
    }
  }

  private createFormControls(): void {
    this.entryFormControl = this.fb.control(this.possibleEntries[0]);
    this.searchFormControl = this.fb.control('');
    this.pageFormControl = this.fb.control(1);
  }

}
