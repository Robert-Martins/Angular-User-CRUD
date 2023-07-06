import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  users?: User[];

  items: number = 0;

  totalPages: number = 0;

  possibleEntries: number[] = [ 5, 10, 20 ];

  pageFormControl!: FormControl;

  entryFormControl!: FormControl;

  searchFormControl!: FormControl;

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

  public onAddUser(): void {
    console.log("add");
  }

  public onViewUser(user: User): void {
    
  }

  public onEditUser(user: User): void {

  }

  public onDeleteUser(userId: number): void {

  }

  public onChangeEntry(): void {
    console.log("entry");
  }

  public onChangeSearch(): void {
    console.log("search");
  }

  private loadData(): void {
    this.users = this.userService.findAll();
    this.items = this.users.length;
    this.totalPages = Math.floor(this.items / this.possibleEntries[0]);
  }

  private createFormControls(): void {
    this.entryFormControl = this.fb.control(this.possibleEntries[0]);
    this.searchFormControl = this.fb.control('');
    this.pageFormControl = this.fb.control(1);
  }

}
