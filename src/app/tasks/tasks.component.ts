import {Component, computed, inject, input, signal} from '@angular/core';
import {TaskComponent} from "../task/task.component";
import {NewTask} from "../task/task.model";
import {NewTaskComponent} from "./new-task/new-task.component";
import {TaskService} from "./task.service";

@Component({
  standalone: false,
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  userId = input.required<string>()
  userName = input.required<string>()
  isAddingTask = signal<boolean>(false);
  private taskService = inject(TaskService)

  sortedTasks = computed(() => {
    return this.taskService.getUserTasks(this.userId())
  })

  onStartAddTask() {
    this.isAddingTask.set(true);
  }

  onCloseAddTask() {
    this.isAddingTask.set(false);
  }

  onAddTask(newTask: NewTask) {
    this.taskService.addTask(newTask, this.userId());
    this.onCloseAddTask();
  }
}
