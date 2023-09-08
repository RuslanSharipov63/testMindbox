import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type todosType = {
  id: string;
  todo: string;
  checked: boolean;
};

type HelperTextType = {
  change: boolean;
  text: string;
};

export type initialStateType = {
  value: string;
  helperText: HelperTextType;
  todos: todosType[];
};

const initialState: initialStateType = {
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
};

const ChangeInputSlice = createSlice({
  name: "name/changeinputslice",
  initialState,
  reducers: {
    handleChangeInput: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    addToDo: (
      state,
      action: PayloadAction<{ id: string; todo: string; checked: boolean }>
    ) => {
      state.todos.push(action.payload);
      state.todos.reverse();
    },
    clearInput: (state) => {
      state.value = "";
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      const newArr = state.todos.filter((item) => item.id != action.payload);
      state.todos = newArr;
    },
    changeCheckBox: (state, action: PayloadAction<string>) => {
      state.todos.map((item) => {
        if (item.id === action.payload) {
          item.checked = !item.checked;
        }
      });
    },
    handleChangeHelperText: (state, action: PayloadAction<HelperTextType>) => {
      state.helperText = action.payload;
    },
    focusChange: (state) => {
      state.value = "";
    },
  },
});

export const {
  handleChangeInput,
  addToDo,
  clearInput,
  deleteTodo,
  changeCheckBox,
  handleChangeHelperText,
  focusChange,
} = ChangeInputSlice.actions;
export default ChangeInputSlice.reducer;
