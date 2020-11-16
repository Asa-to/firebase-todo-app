import React, { FC, SyntheticEvent } from 'react'
import { Button, Form } from 'react-bootstrap';

import { AddTodo } from './TodoManager';

type HandleClick = {
    (param: SyntheticEvent, ref: React.RefObject<HTMLInputElement>): void;
}

const TodoAdder: FC<{ addTodo: AddTodo }> = ({ addTodo }) => {
    const inputRef: React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>();

    const handleClick: HandleClick = (e, ref) => {
        e.preventDefault();
        if(!!!ref.current) return;
        addTodo(ref.current?.value ?? '');
        if(ref.current) ref.current.value = '';
    }

    return (
        <Form>
            <Form.Group controlId='formTodoName' className='flex-row d-flex justify-content-around'>
                <Form.Control ref={inputRef} type='text' placeholder='Enter your todo' />
                <Button type='submit' className='text-nowrap' onClick={(e) => handleClick(e, inputRef)}>追加</Button>
            </Form.Group>
        </Form>
    )
}

export default TodoAdder;