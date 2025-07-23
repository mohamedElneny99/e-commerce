import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,  ReactiveFormsModule } from '@angular/forms';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-create-task',
  imports: [ ReactiveFormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent   {

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private taskService: TaskServiceService) {}

   ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      desc: ['', Validators.required],
      assignedTo: ['', Validators.required],
      priority: ['Critical', Validators.required],
      status: ['In Progress', Validators.required],
    });
  }

  submit() {
    if (this.form.valid) {
      const { title, desc, assignedTo, priority, status }= this.form.value;

      this.taskService.addTask({ title, desc, assignedTo, priority, status });

      this.form.reset({
        title: '',
        desc: '',
        assignedTo: '',
        priority: 'Critical',
        status: 'In Progress'
      });
    }
  }

}
