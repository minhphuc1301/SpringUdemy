import { TodoService } from './../service/todo-service/todo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../to-do-lists/to-do-lists.component';

@Component({
  selector: 'app-to-do-detail',
  templateUrl: './to-do-detail.component.html',
  styleUrls: ['./to-do-detail.component.css']
})
export class ToDoDetailComponent implements OnInit {
  id: number = 0;
  todo!: Todo;
  constructor(private activatedRoute: ActivatedRoute, private todoService: TodoService) { }


  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.todoService.getById(this.id).subscribe(response => {
      this.todo = response;
    })

  }

}
