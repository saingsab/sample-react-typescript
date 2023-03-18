import React, { useRef } from 'react';
import './styles.css';

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputtFeild: React.FC<Props> = ({todo, setTodo, handleAdd}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    
    return <form className='input' onSubmit= {(e) => {
        handleAdd(e);
        inputRef.current?.blur();
        }}>
        <input type="input" 
        value={todo}
        onChange={(e) => setTodo(e.target.value)} placeholder='Enter task name' className='input__box'/>
        <button className='input__submit' type='submit'>Go</button>
    </form>;
}

export default InputtFeild