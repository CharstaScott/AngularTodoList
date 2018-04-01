import { Component } from '@angular/core';


@Component({

  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
  
})
export class TaskComponent {
public todos= [
 {label : "your tasks will display here"}
 
 ];
   
  addTodo(newTodoLabel)   {
  var newTodo = {
    label: newTodoLabel,
    done: false
  };
  this.todos.push(newTodo);
}
deleteTodo(todo){
  this.todos = this.todos.filter(t => t.label !== todo.label );
}


}
