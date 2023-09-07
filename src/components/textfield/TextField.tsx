import { ChangeEvent } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../../hooks/Hooks";
import {
  handleChangeInput,
  addToDo,
  clearInput,
  handleChangeHelperText,
  focusChange,
} from "../../store/ChangeInputSlice";
import TodoValidator from "../../helpers/TodoValidator";

const TextField = () => {
  const dispatch = useAppDispatch();
  const { value, helperText } = useAppSelector(
    (state) => state.ChangeInputSlice
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(handleChangeHelperText({ change: false, text: "" }));
    dispatch(handleChangeInput(e.target.value));
  };

  const Add = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (TodoValidator(value)) {
        let newTodo = {
          id: nanoid(),
          todo: value,
          checked: false,
        };
        dispatch(addToDo(newTodo));
        dispatch(clearInput());
        return;
      }

      dispatch(
        handleChangeHelperText({ change: true, text: "некорректная задача" })
      );
    }
  };

  const startFocusChange = () => {
    dispatch(focusChange());
  };

  return (

      <div className="input-field">
        <input
          value={value}
          id="first_name2"
          type="text"
          className="validate"
          onChange={handleInputChange}
          onKeyDown={Add}
          onFocus={startFocusChange}
        />
        <label className="active" htmlFor="first_name2">
          {helperText.change === true ? helperText.text : "введите задачу"}
        </label>
      </div>
  );
};

export default TextField;
