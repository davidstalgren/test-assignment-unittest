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
/*     expect(todos).toBe(todos.length + 1); */
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
/*     expect(todos).toBe(todos.length + 1); */
  });
});

//*****************************************************************************************
//-------------------------------------- createHtml ---------------------------------------
//*****************************************************************************************

/* describe("createHtml", () => {
  test("", () => {
    //Arrange
    
    //Act
    
    //Assert
    
  })
}); */

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
    let Todo = {text: 'aTodo', done: false}

    //Act
    main.toggleTodo(Todo)

    //Assert
    expect(spyOnChangeTodo).toHaveBeenCalled();
    spyOnChangeTodo.mockRestore();
  })

  test ('Should call function createHtml properly', () => {
    //Arrange
    let spyOnCreateHtml = jest.spyOn(main, "createHtml").mockReturnValue();
    let Todo = {text: 'aTodo', done: false}

    //Act
    main.toggleTodo(Todo)

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
    main.displayError('error text', true)

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
    main.displayError('error text', false)

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
    main.clearTodos ([])

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
    main.clearTodos ([])

    //Assert
    expect(spyOnRemoveAllTodos).toHaveBeenCalled()
    expect(spyOnRemoveAllTodos).toHaveBeenCalledTimes(1)
    spyOnRemoveAllTodos.mockRestore();
  })
});