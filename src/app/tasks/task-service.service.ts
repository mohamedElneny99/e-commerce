import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from './task.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
//   private tasksSubject = new BehaviorSubject<Task[]>([]);
//   tasks$ = this.tasksSubject.asObservable();

//   private apiUrl = 'https://products-d2169-default-rtdb.firebaseio.com/tasks.json'; // غيّر حسب عنوان السيرفر

//   constructor(private http: HttpClient) {
//     this.loadTasks();
//   }

//   loadTasks() {
//   this.http.get<{ [key: string]: Task }>(this.apiUrl).pipe(
//     tap(data => {
//       const tasks = Object.entries(data || {}).map(([id, task]) => ({
//         ...task,
//         id: Number(id)
//        }));
//       this.tasksSubject.next(tasks);
//       console.log('Tasks loaded:', tasks);
//     })
//   ).subscribe();
// }

//   addTask(task: Omit<Task, 'id' | 'createdAt'>) {
//     const newTask = {
//       ...task,
//       createdAt: new Date().toISOString()
//     };

//     this.http.post<Task>(this.apiUrl, newTask)
//       .pipe(
//         tap(() => this.loadTasks()) // إعادة تحميل التاسكات بعد الإضافة
//       )
//       .subscribe();
//   }

//   deleteTask(id: string | undefined) {
//     this.http.delete(`${this.apiUrl}/${id}`).subscribe();
//   }

//   deleteAllTasks() {
//     this.http.delete(this.apiUrl).subscribe()
//   }

  // updateTask(id: number, updatedTask: Partial<Task>) {
  //   this.http.put(`${this.apiUrl}/${id}`, updatedTask)
  //     .pipe(
  //       tap(() => this.loadTasks())
  //     )
  //     .subscribe();
  // }



    private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasksSubject.asObservable();

  private apiBase = 'https://products-d2169-default-rtdb.firebaseio.com/tasks';

  constructor(private http: HttpClient) {}

  /* تحميل جميع المهام */
  loadTasks() {
    this.http
      .get<{ [key: string]: Task }>(`${this.apiBase}.json`)
      .pipe(
        tap(data => {
          const tasks: Task[] = Object.entries(data || {}).map(
            ([key, task]) => ({ ...task, id: key })   // id يبقى string
          );
          this.tasksSubject.next(tasks);
        })
      )
      .subscribe();
  }

  /* إضافة مهمة */
  addTask(task: Omit<Task, 'id' | 'createdAt'>) {
    const newTask = { ...task, createdAt: new Date().toISOString() };

    this.http
      .post<{ name: string }>(`${this.apiBase}.json`, newTask) // Firebase يرجع {name: newKey}
      .pipe(tap(() => this.loadTasks()))
      .subscribe();
  }

  /* حذف مهمة مفردة */
  deleteTask(id?: string) {
    if (!id) return;
    this.http
      .delete(`${this.apiBase}/${id}.json`)
      .pipe(tap(() => this.loadTasks()))
      .subscribe();
  }

  /* حذف الجميع */
  deleteAllTasks() {
    this.http
      .delete(`${this.apiBase}.json`)
      .pipe(tap(() => this.loadTasks()))
      .subscribe();
  }


}
