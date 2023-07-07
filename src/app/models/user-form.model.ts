import { User } from "./user.model";

export class UserForm {

    active: boolean;
    disabled: boolean;
    user: User;

    constructor(
        active: boolean = false,
        disabled: boolean = false,
        user: User = new User
    ) {
        this.active = active;
        this.disabled = disabled;
        this.user = user;
    }

}