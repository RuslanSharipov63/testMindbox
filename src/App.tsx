import './App.css';
import TextField from './components/textfield/TextField';
import Button from './components/button/Button';
import Todos from './components/todos/Todos';
import { useAppSelector } from './hooks/Hooks';
import { useEffect, useState } from 'react';

function App() {
  const { todos, helperText } = useAppSelector(state => state.ChangeInputSlice)

  const [todosState, setTodosState] = useState<
    {
      id: string;
      todo: string;
      checked: boolean;
    }[]
    | null>(null)

  useEffect(() => {
    if (todos.length > 1) {
      const newTodos: { id: string; todo: string; checked: boolean }[] | null = todos.filter(item => item.id != '')
      setTodosState(newTodos)
      return;
    }
  }, [todos])

  useEffect(() => {
    if (todos.length === 1) {
      setTodosState(null)
      return;
    }
  }, [todos])
  return (
    <>
      {todosState ? <ul className="collection">
        {todosState.map((item: { id: string; todo: string; checked: boolean }) =>
          <Todos
            id={item.id}
            todo={item.todo}
            isChecked={item.checked}
          />
        )}
      </ul> : null
      }
      < TextField />
      <Button />
    </>
  );
}

export default App;
