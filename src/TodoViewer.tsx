import React, { FC } from 'react';
import { Button } from 'react-bootstrap';

import { RemoveTodo } from './TodoManager';
import { Todo } from './models/todo';

const ulStyle: React.CSSProperties = {
    'padding': '0',
}

const TodoList: FC<{ todos: Todo[], removeTodo: RemoveTodo }> = ({ todos, removeTodo }) => 
    <ul style={ulStyle}>
        {
            todos.map((todo: Todo) => 
                <li key={todo.id} className='d-flex flex-row justify-cntent-around'>
                    <span className='list-group-item w-100 text-truncate'>{todo.name}</span>
                    <Button variant='outline-danger' className='text-nowrap' onClick={() => removeTodo(todo.id)}>削除</Button>
                </li>
            )
        }
    </ul>

export default TodoList;