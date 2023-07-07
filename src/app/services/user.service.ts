import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserForm } from '../models/user-form.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private localStorageKey: string = 'users';

  private userForm = new BehaviorSubject<UserForm>(new UserForm());

  constructor(
    private fb: FormBuilder
  ) { }

  public create(user: User): void {
    const users = this.findAll();
    user.id = Math.max(...users.map(u => u.id), 0) + 1;
    users.push(user);
    this.saveUsers(users);
    location.reload();
  }

  public read(userId: number): User | null {
    const users: User[] = this.findAll();
    return users.find(u => u.id === userId) ?? null;
  }

  public update(userId: number, user: User): void {
    const users = this.findAll();
    const index = users.findIndex(u => u.id === userId);
    if(index == -1)
      return;
    users[index] = user;
    this.saveUsers(users);
    location.reload();
  }

  public delete(userId: number): void {
    const users: User[] = this.findAll();
    const index = users.findIndex(u => u.id === userId);
    if(index != -1) {
      users.splice(index, 1);
      this.saveUsers(users);
    }
  }

  public findAll(): User[] {
    const storaged = localStorage.getItem(this.localStorageKey);
    return storaged ? JSON.parse(storaged) : [];
  }

  public openForm(user: User, disabled: boolean = false): void {
    this.userForm.next(new UserForm(true, disabled, user));
  }

  public closeForm(): void {
    this.userForm.next(new UserForm(false));
  }

  public getFormData(): UserForm {
    return this.userForm.value;
  }

  public get formActive(): boolean {
    return this.userForm.value.active;
  }

  public createUserForm(user: User): FormGroup {
    return this.fb.group({
      id: [user.id],
      email: [user.email, [Validators.required, Validators.email]],
      username: [user.username, [Validators.required]],
      password: [user.password, [Validators.required]]
    })
  }

  private saveUsers(users: User[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(users));
  }

}
