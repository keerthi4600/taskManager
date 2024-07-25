import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  @Output() taskCreated = new EventEmitter<Task>();

  newTask: Task = {
    title: '',
    description: '',
    status: 'To Do'
  };

  constructor(private taskService: TaskService) {}

  onSubmit(): void {
    this.taskService.createTask(this.newTask).subscribe(task => {
      this.taskCreated.emit(task);
      this.newTask = { title: '', description: '', status: 'To Do' };
    });
  }
}
