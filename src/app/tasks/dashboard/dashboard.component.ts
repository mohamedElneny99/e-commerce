import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskServiceService } from '../task-service.service';
import { CreateTaskComponent } from "../create-task/create-task.component";
import { Observable } from 'rxjs';
import { Task } from '../task.model';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, CreateTaskComponent ,  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  showCreateTask = false;
  tasks$!: Observable<Task[]>;

  constructor(private taskService: TaskServiceService) {}

  ngOnInit() {
    this.tasks$ = this.taskService.tasks$;
    this.taskService.loadTasks();
  }

  deleteTask(id?: string) {
    this.taskService.deleteTask(id);
  }

  deleteAllTasks() {
    this.taskService.deleteAllTasks();
  }

  formatDate(date: string) {
    return new Date(date).toLocaleString();
  }

}
