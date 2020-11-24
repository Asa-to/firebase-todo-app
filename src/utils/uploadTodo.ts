import firebase from 'firebase/app';
import { Todo } from '../models/todo';

export type UploadTodo = {
    (user: string, todo: Todo): void;
}

const uploadTodo: UploadTodo = async (user, todo) => {
    const db = firebase.firestore();
    const dataRef = db.collection('todos').doc(todo.id);
    await dataRef.set({
        name: todo.name,
        user
    });
}

export default uploadTodo;