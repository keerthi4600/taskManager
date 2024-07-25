import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input() tasks: Task[] = [];
  @Output() taskDeleted: EventEmitter<string> = new EventEmitter<string>();
  filteredTasks: Task[] = [];
  selectedStatus: string = 'All';

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    console.log(this.tasks);
    this.filterTasks();
  }

  ngOnChanges(): void {
    this.filterTasks();
  }

  filterTasks(): void {
    if (this.selectedStatus === 'All') {
      this.filteredTasks = this.tasks.slice();
    } else {
      this.filteredTasks = this.tasks.filter(task => task.status === this.selectedStatus);
    }
  }

  updateTaskStatus(task: Task): void {
    const newStatus = task.status === 'To Do' ? 'In Progress' : 'Done';
    if (task._id) {
      this.taskService.updateTask(task._id, { ...task, status: newStatus }).subscribe(
        updatedTask => {
          task.status = updatedTask.status;
        },
        error => {
          console.error('Error updating task status:', error);
        }
      );
    }
  }

  deleteTask(taskId: string | undefined): void {
    if (taskId && this.tasks) {
      this.taskService.deleteTask(taskId).subscribe(
        () => {
          this.filteredTasks = this.tasks = this.tasks.filter(task => task._id !== taskId);
          this.taskDeleted.emit(taskId);
        },
        error => {
          console.error('Error deleting task:', error);
        }
      );
    }
  }
}
