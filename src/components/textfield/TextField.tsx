import { ChangeEvent } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from "../../hooks/Hooks";
import { handleChangeInput, addToDo, clearInput } from "../../store/ChangeInputSlice";

const TextField = () => {
    const dispatch = useAppDispatch();
    const { value } = useAppSelector(state => state.ChangeInputSlice)
   
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(handleChangeInput(e.target.value))
    }
 
    const Add = () => {
        let newTodo = {
            id: nanoid(),
            todo: value,
            checked: false,
        }
        dispatch(addToDo(newTodo))
        dispatch(clearInput())
    }
    }
    return (
        <div className="row">
            <div className="input-field col s4">
                <input value={value}
                    id="first_name2"
                    type="text"
                    className="validate"
                    onChange={handleInputChange}
                    onKeyDown={Add}/>
                
                <label
                    className="active"
                    htmlFor="first_name2">
                    Введите задачу
                </label>
            </div>
        </div>
    );
}

export default TextField;