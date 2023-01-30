import { IAddResponse } from "./models/IAddResult";
import { Todo } from "./models/Todo";
//Done
export function addTodo(todoText: string, todos: Todo[]): IAddResponse {
  if (todoText.length > 2) {
    let newTodo = new Todo(todoText, false);
    todos.push(newTodo);
    return { success: true, error: "" };
  } else {
    return { success: false, error: "Du måste ange minst tre bokstäver" };
  }
}
//Done
export function changeTodo(todo: Todo) {
  todo.done = !todo.done;
}
//Done
export function removeAllTodos(todos: Todo[]) {
  todos.splice(0, todos.length);
}

//Done
export function completeLast(todos: Todo[]) {
todos.sort((todos1, todos2) => {
    if (todos1.done < todos2.done) {
      return -1;
    }
    if (todos1.done > todos2.done) {
      return 1;
    }
    return 0;
  });
};