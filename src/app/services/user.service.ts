import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private localStorageKey: string = 'users';

  constructor(
    
  ) { }

  public create(user: User): void {
    const users = this.findAll();
    user.id = Math.max(...users.map(u => u.id), 0) + 1;
    users.push(user);
    this.saveUsers(users);
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

  private saveUsers(users: User[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(users));
  }

}
