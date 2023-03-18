import React, { useRef } from 'react';
import './styles.css';
import {Todo} from '../model';
import {AiFillEdit} from 'react-icons/ai'

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({todo, todos, setTodos}) => {
 
    return <form className='todos__single'>
        <span className='todos__single--text'>
            {todo.todo}
        </span>
        <div>
            <span className="icon">
                <AiFillEdit />
            </span>
        </div>
    </form>;
}

export default SingleTodo