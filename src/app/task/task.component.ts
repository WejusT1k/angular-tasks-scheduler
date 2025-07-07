import {Component, inject, input, output} from '@angular/core';
import {Task} from "./task.model";
import {TaskService} from "../tasks/task.service";

@Component({
  standalone: false,
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task = input.required<Task>()
  private taskService = inject(TaskService)

  onCompleteTask() {
    this.taskService.removeTask(this.task().id);
  }
}
