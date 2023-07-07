import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserForm } from 'src/app/models/user-form.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnChanges {

  @Input()
  active!: boolean;

  userFormGroup!: FormGroup;

  constructor(
    private userService: UserService
  ) { }

  ngOnChanges(): void {
      if(this.active)
        this.createUserForm();
  }

  public createUserForm(): void {
    console.log(this.userFormData);
    this.userFormGroup = this.userService.createUserForm(this.user);
  }

  public get userFormData(): UserForm {
    return this.userService.getFormData();
  }

  public get user(): User {
    return this.userFormData.user;
  }

  public get isNewUser(): boolean {
    return this.user.id === 0 || this.user.id == null;
  }

  public get title(): string {
    return this.isNewUser ? "New User" : `User ID ${this.user.id} Form`;
  }

  public get disabled(): boolean {
    return this.userFormData.disabled;
  }

  public get formValues(): User {
    return this.userFormGroup.value as User;
  }

  public getFormControl(controlName: string): FormControl {
    return this.userFormGroup.controls[controlName] as FormControl;
  }

  public onClickSave(): void {
    this.isNewUser 
      ? 
        this.userService.create(this.formValues) 
      : 
        this.userService.update(this.formValues.id, this.formValues);
  }

  public onClickClose(): void {
    this.userService.closeForm();
  }

}
