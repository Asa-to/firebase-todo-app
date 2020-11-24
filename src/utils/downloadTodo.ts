import firebase from 'firebase/app';
import 'firebase/firestore';
import { Todo } from '../models/todo';

export type DownloadTodos = {
    (user: string): Promise<Todo[]>;
}

const downloadTodos: DownloadTodos = async (user) => {
    const db = firebase.firestore();
    const todos: Todo[] = [];
    await db.collection('todos').where('user', '==', user).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const { id } = doc;
            const { name, user } = doc.data();
            todos.push({id, name, user} as Todo);
        });
    });
    return todos;
}

export default downloadTodos;