/**
 * @jest-environment jsdom
 */

//*****************************************************************************************
//----------------------------------------- Imports ---------------------------------------
//*****************************************************************************************

import * as main from '../ts/main';
import * as functions from '../ts/functions';

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

  test ('should call function removeAllTodos properly', () => {
    //Arrange
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`
    let spyOnRemoveAllTodos = jest.spyOn(functions, "removeAllTodos").mockReturnValue();

    //Act
    main.clearTodos ([])

    //Assert
    expect(spyOnRemoveAllTodos).toHaveBeenCalled()
    expect(spyOnRemoveAllTodos).toHaveBeenCalledTimes(1)
  })
});

//*****************************************************************************************
//--------------------------------------- toggleTodo --------------------------------------
//*****************************************************************************************

describe("toggleTodo", () => {
  test("Should call function changeTodo properly", () => {
    //Arrange
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`
    let spyOnChangeTodo = jest.spyOn(functions, "changeTodo").mockReturnValue();
    let Todo = {text: 'aTodo', done: false}

    //Act
    main.toggleTodo(Todo)

    //Assert
    expect(spyOnChangeTodo).toHaveBeenCalled();
  })

  test ('should call function createHtml properly', () => {
    //Arrange
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`
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