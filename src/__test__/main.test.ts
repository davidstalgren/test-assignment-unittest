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
})

//*****************************************************************************************
//------------------------------------- createNewTodo -------------------------------------
//*****************************************************************************************

describe("createNewTodo", () => {
  test("Should call function createHtml properly if addTodo returns success true", () => {
    //Arrange
    document.body.innerHTML = `
    <ul id="todos" class="todo"></ul>
    `;
    let todos: Todo[] = [];
    let spyOnCreateHtml = jest.spyOn(main, "createHtml").mockReturnValue();

    //Act
    main.createNewTodo('text', todos);

    //Assert
    expect(spyOnCreateHtml).toHaveBeenCalled();
    spyOnCreateHtml.mockRestore();
  });

  test("Should call function displayError properly if addTodo returns success false", () => {
    //Arrange
    document.body.innerHTML = `
    <ul id="todos" class="todo"></ul>
    `;
    let todos: Todo[] = [];
    let spyOnDisplayError = jest.spyOn(main, "displayError").mockReturnValue();

    //Act
    main.createNewTodo('', todos);

    //Assert
    expect(spyOnDisplayError).toHaveBeenCalled();
    spyOnDisplayError.mockRestore();
  });

    test("Should increase length of array by one when sucessfull ", () => {
    //Arrange
    document.body.innerHTML = `
    <ul id="todos" class="todo"></ul>
    `;
    let todos: Todo[] = [];

    //Act
    main.createNewTodo('text', todos);

    //Assert
    expect(todos.length).toBe(1);
  });
});

//*****************************************************************************************
//-------------------------------------- createHtml ---------------------------------------
//*****************************************************************************************

describe("createHtml" , () => {
  test("Should call function toggleTodo properly when click on li element", () => {
    //Arrange
    document.body.innerHTML = `
      <ul id="todos" class="todo">
        <li class="todo__text">testTodo1</li>
      </ul>
      `;
    let todos: Todo[] = [
      {text: 'testTodo1',
       done: false
      }];
    let spyOnToggleTodo = jest.spyOn(main, "toggleTodo").mockReturnValue();

    //Act
    main.createHtml(todos);
    document.querySelector('li')?.click();
    
    //Assert
    expect(spyOnToggleTodo).toHaveBeenCalled();
    expect(spyOnToggleTodo).toHaveBeenCalledTimes(1);
    spyOnToggleTodo.mockRestore();

  })

  test("Should check if class todo__text--done is added when a Todo is completed.", () => {
    //Arrange
    document.body.innerHTML = `
      <ul id="todos" class="todo">
        <li class="todo__text">testTodo1Done</li>
      </ul>
      `;
    let todos: Todo[] = [
      {text: 'testTodo1Done',
       done: true
      }];

    //Act
    main.createHtml(todos);

    //Assert
    let liElement: HTMLLIElement = document.querySelector('li') as HTMLLIElement;
    expect(liElement.classList.contains('todo__text--done')).toBe(true);

  })
});

//*****************************************************************************************
//-------------------------------------- toggleTodo ---------------------------------------
//*****************************************************************************************

describe("toggleTodo", () => {
  test("Should call function changeTodo properly", () => {
    //Arrange
    document.body.innerHTML = `
      <ul id="todos" class="todo"></ul>
      `;
    let spyOnChangeTodo = jest.spyOn(functions, "changeTodo").mockReturnValue();
    let Todo = {text: 'aTodo', done: false};

    //Act
    main.toggleTodo(Todo);

    //Assert
    expect(spyOnChangeTodo).toHaveBeenCalled();
    spyOnChangeTodo.mockRestore();
  })

  test ('Should call function createHtml properly', () => {
    //Arrange
    let spyOnCreateHtml = jest.spyOn(main, "createHtml").mockReturnValue();
    let Todo = {text: 'aTodo', done: false};

    //Act
    main.toggleTodo(Todo);

    //Assert
    expect(spyOnCreateHtml).toHaveBeenCalled();
    expect(spyOnCreateHtml).toHaveBeenCalledTimes(1);
    spyOnCreateHtml.mockRestore();
  })
});

//*****************************************************************************************
//------------------------------------- displayError --------------------------------------
//*****************************************************************************************

describe("displayError", () => {
  test("Should add class show is show is true", () => {
    //Arrange
    document.body.innerHTML = `
      <div id="error" class="error"></div>
      `;
      let errorContainer: HTMLDivElement = document.getElementById("error") as HTMLDivElement;

    //Act
    main.displayError('error text', true);

    //Assert
    expect(errorContainer.classList.contains('show')).toBe(true);
    
    // Try later with .toHaveClass using other library
    // https://github.com/testing-library/jest-dom

  })

  test("Should remove class show if show is false", () => {
    //Arrange
    document.body.innerHTML = `
      <div id="error" class="error show"></div>
      `;
      let errorContainer: HTMLDivElement = document.getElementById("error") as HTMLDivElement;

    //Act
    main.displayError('error text', false);

    //Assert
    expect(errorContainer.classList.contains('show')).toBe(false);

    // Try later with .toHaveClass using other library
    // https://github.com/testing-library/jest-dom

  })
});

//*****************************************************************************************
//--------------------------------------- clearTodos --------------------------------------
//*****************************************************************************************

describe("clearTodos", () => {
  test("Should call function createHtml properly", () => {
    //Arrange
    let spyOnCreateHtml = jest.spyOn(main, "createHtml").mockReturnValue();

    //Act
    main.clearTodos ([]);

    //Assert
    expect(spyOnCreateHtml).toHaveBeenCalled();
    expect(spyOnCreateHtml).toHaveBeenCalledTimes(1);
    spyOnCreateHtml.mockRestore();
  })

  test ('Should call function removeAllTodos properly', () => {
    //Arrange
    document.body.innerHTML = `
      <ul id="todos" class="todo"></ul>
      `;
    let spyOnRemoveAllTodos = jest.spyOn(functions, "removeAllTodos").mockReturnValue();

    //Act
    main.clearTodos ([]);

    //Assert
    expect(spyOnRemoveAllTodos).toHaveBeenCalled();
    expect(spyOnRemoveAllTodos).toHaveBeenCalledTimes(1);
    spyOnRemoveAllTodos.mockRestore();
  })
});