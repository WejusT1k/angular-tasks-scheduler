import {Injectable, signal} from "@angular/core";
import {NewTask, Task} from "../task/task.model";

@Injectable({providedIn: 'root'})
export class TaskService {
  private tasks = signal<Task[]>([])

  constructor() {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    this.tasks.set(tasks);
  }

  getUserTasks(userId: string){
    return this.tasks().filter(t => t.userId === userId);
  }

  addTask(newTask: NewTask, userId: string){
    this.tasks.update(tasks => [...tasks, {
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.date,
      userId: userId,
      id: new Date().getTime().toString()
    }])
    this.saveTasks();
  }

  removeTask(id: string){
    this.tasks.set(this.tasks().filter(t => t.id !== id));
    this.saveTasks();
  }

  private saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks()));
  }
}
