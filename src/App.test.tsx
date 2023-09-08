import { fireEvent, render, screen } from '@testing-library/react';
import TextField from './components/textfield/TextField';
import { useAppSelector } from './hooks/Hooks';
import { addToDo } from './store/ChangeInputSlice';
import { initialStateType } from './store/ChangeInputSlice';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

describe('Home reducer', () => {
  const state: initialStateType = {
    value: "",
    helperText: {
      change: false,
      text: "",
    },
    todos: [
      {
        id: "",
        todo: "",
        checked: false,
      },
    ],
  }

  it('should add to favorites', () => {
    const initialState: initialStateType = { ...state, todos: [] }
    const action: any = addToDo({ id: 'sfwewe', todo: 'add World', checked: false })
    const expectedState: initialStateType = { ...state, todos: [{ id: 'sfwewe', todo: 'add World', checked: false }] }

    expect(addToDo(initialState, action)).toEqual(expectedState)
  })

})
/* test('onChange', () => { */
/*   const { getByRole } = render(<TextField />); */
/*   const component = render(<TextField />); */
/* const input = getByRole('textbox') as HTMLInputElement; */
/*   userEvent.type(screen.getByRole('testbox'), 'React'); */
/*  fireEvent.change(input, { target: { value: 'test' } }); */
/* expect(onChange).toHaveBeenCalledTimes(5) */
/*  expect(input.value).toBe('test'); */
/* }); */
