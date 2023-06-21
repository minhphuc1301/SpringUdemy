import { TodoService } from './../service/todo-service/todo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export class Todo {
  constructor(public id: number, public description: string, public targetDate: Date, public done: boolean) {

  }
}
@Component({
  selector: 'app-to-do-lists',
  templateUrl: './to-do-lists.component.html',
  styleUrls: ['./to-do-lists.component.css']
})


export class ToDoListsComponent implements OnInit {
  todoList: Todo[] = []
  message: string = '';
  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.getAllTodo();
  }

  getAllTodo() {
    this.todoService.getAllTodo().subscribe(reponse => this.todoList = reponse)
  }
  deleteById(id: number) {
    this.todoService.deleteById(id).subscribe(response => {
      alert(this.message.concat(`Delete todo with ID:${id} sucessfully`))
      this.getAllTodo();
    })
  }
  updateById(id: number) {
    this.router.navigate(['/todos', id]);

  }
}
