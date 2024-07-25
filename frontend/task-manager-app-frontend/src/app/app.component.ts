import { Component } from '@angular/core';
import { Task } from '../app/task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-manager';
  tasks: Task[] = [];
  showTaskForm: boolean = false;
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.fetchTasks();
  }
  toggleTaskForm(): void {
    this.showTaskForm = !this.showTaskForm;
  }
  fetchTasks(): void {
    this.taskService.getAllTasks().subscribe(
      tasks => {
        this.tasks = tasks;
      },
      error => {
        console.error('Error fetching tasks:', error);
      }
    );
  }

  addTask(newTask: any) {
    this.tasks.push(newTask);
    this.showTaskForm = false;
  }

  onTaskDeleted(taskId: string): void {
    this.tasks = this.tasks.filter(task => task._id !== taskId);
  }
}
