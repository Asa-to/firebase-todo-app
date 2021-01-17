import React, { FC, useState, useEffect, useContext } from 'react';
import { Card, Container } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import 'firebase/auth';

import TodoViewer from './TodoViewer';
import TodoAdder from './TodoAdder';
import { Todo } from './models/todo';
import downloadTodos from './utils/downloadTodo';
import uploadTodo from './utils/uploadTodo';
import deleteTodo from './utils/deleteTodo';
import SigninControl from './component/SigninControl';
import { UserContext } from './contexts';
import { defaultUser } from './models/user';

export type RemoveTodo = {
    (param: string): void;
}

export type AddTodo = {
    (param: string): void;
}


const TodoManager: FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const {user} = useContext(UserContext);

    useEffect(() => {
        const load = async () => {
            const newTodos = await downloadTodos(user);
            console.log(user);
            setTodos(newTodos);
        }
        load();
    }, [user]);

    const removeTodo: RemoveTodo = (id: string) => {
        setTodos(todos => todos.filter((todo) => todo.id !== id));
        deleteTodo(user, id);
    }

    const addTodo: AddTodo = (name: string) => {
        if(name.length){
            const todo: Todo = {id: uuid(), name, user}
            setTodos(todos => todos.concat(todo));
            uploadTodo(user, todo);
        }
    }

    return (
        <Container fluid='md'>
            <Card className='mx-1 px-2 py-3'>
                <Card.Body>
                    <Card.Title style={{height: '90px'}} className="text-center">
                        {user === defaultUser ? 'みんなの': `${user}の`}Todo App
                        <SigninControl />
                    </Card.Title>
                    <TodoAdder addTodo={addTodo} />
                    <TodoViewer todos={todos} removeTodo={removeTodo} />
                </Card.Body>
            </Card>
        </Container>
    )
}

export default TodoManager;