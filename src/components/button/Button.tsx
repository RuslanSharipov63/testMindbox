import { useAppSelector, useAppDispatch } from "../../hooks/Hooks";
import { nanoid } from "@reduxjs/toolkit";
import { addToDo, clearInput, handleChangeHelperText } from "../../store/ChangeInputSlice";
import TodoValidator from "../../helpers/TodoValidator";

const Button = () => {
    const dispatch = useAppDispatch();
    const { value } = useAppSelector(state => state.ChangeInputSlice)

    const Add = () => {
        if (TodoValidator(value)) {
            let newTodo = {
                id: nanoid(),
                todo: value,
                checked: false,
            }
            dispatch(addToDo(newTodo))
            dispatch(clearInput())
            return;
        }

        dispatch(handleChangeHelperText({ change: true, text: 'некорректная задача' }))
    }

    return (
        <a className="waves-effect waves-light btn-small" onClick={Add}
        >
            добавить
        </a>
    );
}

export default Button;