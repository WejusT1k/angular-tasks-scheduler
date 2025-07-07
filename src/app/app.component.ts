import {Component, computed, signal} from '@angular/core';
import {DUMMY_USERS} from "./dummy-users";

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId = signal<string | null>(null);

  selectedUser = computed(() => this.users.find(
    u => u.id === this.selectedUserId())
  );

  onSelectUser(id: string) {
    this.selectedUserId.set(id);
  }
}
