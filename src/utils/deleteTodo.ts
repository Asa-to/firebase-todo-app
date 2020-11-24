import firebase from 'firebase/app';
import 'firebase/firestore';

export type DeleteTodo = {
    (user: string, id: string): void;
}

const deleteTodo: DeleteTodo = (user, id) => {
    const db = firebase.firestore();
    db.collection('todos').doc(id).delete()
    .then(() => {
        console.log(id, ' is deleted.');
    }).catch((err) => {
        console.error('Error removing document: ', err);
    });
}

export default deleteTodo;