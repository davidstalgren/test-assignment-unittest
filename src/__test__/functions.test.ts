/**
 * @jest-environment jsdom
 */

//*****************************************************************************************
//------------------------------ Imports and global stuffs---------------------------------
//*****************************************************************************************

import * as main from '../ts/main';
import * as functions from '../ts/functions';
import { Todo } from "../ts/models/Todo";

beforeEach(() => {
	document.body.innerHTML = '';
});

//*****************************************************************************************
//----------------------------------------- addTodo ---------------------------------------
//*****************************************************************************************

describe("addTodo", () => {
  test("Should add a new todo when run properly", () => {
    //Arrange
    let todo: Todo [] = [];

    //Act
    functions.addTodo('test1', todo);

    //Assert
    expect(todo.length).toBe(1);
  });

  test("Should add a new todo when run properly", () => {
    //Arrange
    let todo: Todo [] = [];

    //Act
    functions.addTodo('', todo);

    //Assert
    expect(todo.length).toBe(0);
  });
});

//*****************************************************************************************
//--------------------------------------- changeTodo --------------------------------------
//*****************************************************************************************

describe("changeTodo", () => {
  test("Should change boolean done when run properly", () => {
    //Arrange
    let todo: Todo = { text: 'test1', done: false };
    
    //Act
    functions.changeTodo(todo);

    //Assert
    expect(todo.done).toBe(true);
  });

  test("Should change boolean done when run properly", () => {
    //Arrange
    let todo: Todo = { text: 'test2', done: true };
    
    //Act
    functions.changeTodo(todo);

    //Assert
    expect(todo.done).toBe(false);
  });
});

//*****************************************************************************************
//------------------------------------ removeAllTodos -------------------------------------
//*****************************************************************************************

describe("removeAllTodos", () => {
  test("Should remove all the todos when run properly", () => {
    //Arrange
    let todos: Todo[] = [
      { text: 'test1', done: true },
      { text: 'test2', done: false },
    ];
    
    //Act
    functions.removeAllTodos(todos);

    //Assert
    expect(todos.length).toBe(0);
  });
});

//*****************************************************************************************
//------------------------------------- completeLast -------------------------------------
//*****************************************************************************************

describe("completeLast", () => {
  test("Should sort the Todos array with the completed tasks at bottom", () => {
    //Arrange
    let todos: Todo[] = [
      { text: 'test1', done: true },
      { text: 'test2', done: false },
    ];
    
    //Act
    functions.completeLast(todos);

    //Assert
    let result: Todo[] = [
      { text: 'test2', done: false },
      { text: 'test1', done: true },
    ];
    expect(todos).toStrictEqual(result);
  });

  test("Should sort the Todos array with the completed tasks at bottom", () => {
    //Arrange
    let todos: Todo[] = [
      { text: 'test2', done: false },
      { text: 'test1', done: true },
    ];
    
    //Act
    functions.completeLast(todos);

    //Assert
    let result: Todo[] = [
      { text: 'test2', done: false },
      { text: 'test1', done: true },
    ];
    expect(todos).toStrictEqual(result);
  });

  test("Should sort the Todos array with the completed tasks at bottom", () => {
    //Arrange
    let todos: Todo[] = [
      { text: 'test2', done: false },
      { text: 'test1', done: false },
    ];
    
    //Act
    functions.completeLast(todos);

    //Assert
    let result: Todo[] = [
      { text: 'test2', done: false },
      { text: 'test1', done: false },
    ];
    expect(todos).toStrictEqual(result);
  });
});
