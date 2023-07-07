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

  public users: User[] = [];

  public filtered: User[] = [];

  readonly possibleEntries: number[] = [ 5, 10, 20 ];

  public pageFormControl!: FormControl;

  public entryFormControl!: FormControl;

  public searchFormControl!: FormControl;

  public paginator: Paginator = new Paginator(1);

  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createFormControls();
    this.loadData();
  }
  
  public get entries(): number {
    return this.entryFormControl.value;
  }

  public get currentPage(): number {
    return this.pageFormControl.value;
  }

  public get isListEmpty(): boolean {
    return this.users?.length === 0;
  }

  public set pageOrder(order: 'id' | 'email' | 'username') {
    this.paginator.orderBy = order;
    this.filterData();
  }

  public set pageSort(sort: 'ASC' | 'DESC') {
    this.paginator.sortBy = sort;
    this.filterData();
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
  }

  public onChangePaginator(): void {
    this.filterData();
  }

  private loadData(): void {
    this.filtered = this.userService.findAll();
    this.paginator = new Paginator(
      this.filtered.length,
      this.entryFormControl.value,
      this.pageFormControl.value
    );
    this.filterData();
  }

  private filterData(): void {
    
  }

  private createFormControls(): void {
    this.entryFormControl = this.fb.control(this.possibleEntries[0]);
    this.searchFormControl = this.fb.control('');
    this.pageFormControl = this.fb.control(1);
  }

}
