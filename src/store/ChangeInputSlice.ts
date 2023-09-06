import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type todosType = {
    id: string,
    todo: string,
    checked: boolean
}

type initialStateType = {
    value: string;
    todos: todosType[]
}

const initialState: initialStateType = {
    value: '',
    todos: [
        {
            id: '',
            todo: '',
            checked: false,
        }
    ],
}

const ChangeInputSlice = createSlice({
    name: 'name/changeinputslice',
    initialState,
    reducers: {
        handleChangeInput: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
        addToDo: (state, action: PayloadAction<{ id: string, todo: string; checked: boolean }>) => {
            state.todos.push(action.payload)
        },
        clearInput: (state) => {
            state.value = ''
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            const newArr = state.todos.filter(item => item.id != action.payload);
            state.todos = newArr;
        },
        changeCheckBox: (state, action: PayloadAction<string>) => {
            state.todos.map(item => {
                if (item.id === action.payload) {
                    item.checked = !item.checked
                }
            })
        }
    }
})

export const { handleChangeInput, addToDo, clearInput, deleteTodo, changeCheckBox } = ChangeInputSlice.actions;
export default ChangeInputSlice.reducer;