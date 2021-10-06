import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  toDos: Todo[] = [
    {task: 'Laundry', completed: false},
    {task: 'Change Oil', completed: false},
    {task: 'Wash dishes', completed: true},
    {task: 'Re-organize garage', completed: false},
    {task: 'Order groceries', completed: false},
    {task: 'Learn Angular', completed: false}
  ];
  newTask: string = '';


  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    this.toDos.push({task: this.newTask, completed: false});
  }
  
  completeTask(mytodo: Todo){
    mytodo.completed = true;
  }

}
