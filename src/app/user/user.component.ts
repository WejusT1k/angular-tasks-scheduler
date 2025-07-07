import {Component, computed, input, output} from '@angular/core';
import {DUMMY_USERS} from "../dummy-users";
import {User} from "./user.model";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  standalone: false,
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = input.required<User>()
  selected = input.required<boolean>()
  select = output<string>()

  fullAvatarPath = computed(() => `/assets/users/${this.user().avatar}`)

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
