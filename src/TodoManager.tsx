import React, { FC, useState} from 'react';
import { Card, Container } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';

import TodoViewer from './TodoViewer';
import TodoAdder from './TodoAdder';

export type Todo = {
    id: string,
    name: string
}

export type RemoveTodo = {
    (param: Todo): void;
}

export type AddTodo = {
    (param: string): void;
}

const TodoManager: FC = () => {
    const [todoList, setTodoViewer] = useState<Todo[]>([]);

    const removeTodo: RemoveTodo = (target: Todo) => {
        setTodoViewer(todoList.filter((todo) => todo.id !== target.id));
        console.log(target.name, ':', target.id , 'is removed');
    }

    const addTodo: AddTodo = (name: string) => {
        if(name.length) setTodoViewer(todoList.concat({id: uuid(), name}));
    }

    return (
        <Container fluid='md'>
            <Card className='mx-1 px-2 py-3'>
                <Card.Title className="text-center">Todo App</Card.Title>
                <TodoAdder addTodo={addTodo} />
                <TodoViewer todoList={todoList} removeTodo={removeTodo} />
            </Card>
        </Container>
    )
}

export default TodoManager;