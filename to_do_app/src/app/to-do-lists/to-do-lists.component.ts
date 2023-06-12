import { Component, OnInit } from '@angular/core';
export class Todo {
  constructor(public id: number, public descriptions: string, public targetDate: Date, public isCompleted: boolean) {

  }
}
@Component({
  selector: 'app-to-do-lists',
  templateUrl: './to-do-lists.component.html',
  styleUrls: ['./to-do-lists.component.css']
})


export class ToDoListsComponent implements OnInit {
  todoList = [
    new Todo(1, 'Test 1', new Date(), true),
    new Todo(2, 'Test 2', new Date(), false),
    new Todo(3, 'Test 3', new Date(), true),
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
