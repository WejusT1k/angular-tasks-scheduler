import {Component, inject, input, output, signal} from '@angular/core';
import {NewTask} from "../../task/task.model";
import {TaskService} from "../task.service";

@Component({
  standalone: false,
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  userId = input.required<string>();
  closeDialogEvent = output()
  addTaskEvent = output<NewTask>()
  enteredTitle = signal<string>('');
  enteredSummary = signal('');
  enteredDueDate = signal('');
  private taskService = inject(TaskService);

  closeDialog() {
    this.closeDialogEvent.emit();
  }

  onSubmit() {
    this.taskService.addTask({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      date: this.enteredDueDate()
    }, this.userId())
    this.closeDialogEvent.emit();
  }
}
