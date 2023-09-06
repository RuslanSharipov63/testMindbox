import { useAppSelector, useAppDispatch } from "../../hooks/Hooks";
import { nanoid } from "@reduxjs/toolkit";
import { addToDo, clearInput } from "../../store/ChangeInputSlice";

const Button = () => {
    const dispatch = useAppDispatch();
    const { value } = useAppSelector(state => state.ChangeInputSlice)

    const Add = () => {
        let newTodo = {
            id: nanoid(),
            todo: value,
            checked: false,
        }
        dispatch(addToDo(newTodo))
        dispatch(clearInput())
    }


  

    return (
        <a className="waves-effect waves-light btn-small" onClick={Add}
            >
            добавить
        </a>
    );
}

export default Button;