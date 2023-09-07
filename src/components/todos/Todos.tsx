import { FC } from "react";
import { useAppDispatch } from "../../store/store";
import { deleteTodo, changeCheckBox } from "../../store/ChangeInputSlice";
import styles from './Todos.module.css'


type TodosProps = {
    id: string;
    todo: string;
    isChecked: boolean;
}

const Todos: FC<TodosProps> = ({ id, todo, isChecked }) => {
    const dispatch = useAppDispatch();
    const startDeleteTodo = () => {
        dispatch(deleteTodo(id))
    }
    const startChangeCheckbox = () => {
        dispatch(changeCheckBox(id))
    }

    return (
        <li
            className={`${isChecked ? styles.noActive : null} collection-item`}
            key={id}>
            {todo}
            <div>
                <i className={`${styles.iconsTodo} material-icons`} onClick={startDeleteTodo}>clear</i>
                <label>
                    <input type="checkbox"
                        checked={isChecked}
                        onChange={startChangeCheckbox}
                    />
                    <span>{isChecked === true ? 'выполнено' : 'не выполнено'}</span>
                </label>
            </div>
        </li >
    );
}

export default Todos;