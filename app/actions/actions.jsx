import firebase, {firebaseRef, githubProvider} from 'app/firebase/';
import moment from 'moment';


export var setSearchText = (searchText) => {
    return  {
        type: 'SET_SEARCH_TEXT',
        searchText
    };
};

export var addTodo = (todo) => {
    return  {
        type: 'ADD_TODO',
        todo
    };
};

export var startAddTodo = (text) => {
    return (dispatch, getState) => {
        var todo = {
            text: text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: null
        };
        var uid = getState().auth.uid;
        // var todoRef = firebaseRef.child('users/'+uid+'/todos').push(todo);

        // return todoRef.then(() => {
        //     dispatch(addTodo((Object.assign({}, todo, {id: Math.random()}))));
        // });

        dispatch(addTodo((Object.assign({}, todo, {id: Math.random()}))));
    };
};

export var toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED',
    };
};

export var updateTodo = (id, updates) => {
    return {
        type: 'UPDATE_TODO',
        id,
        updates
    };
};

export var addTodos = (todos) => {
    return {
        type: 'ADD_TODOS',
        todos
    };
};

export var startToggleTodo = (id, completed) => {
    return (dispatch, getState) => {
        var uid = getState().auth.uid;
        // var todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
        var updates = {
            completed,
            completedAt: completed ? moment().unix() : null
        };
        // return todoRef.update(updates).then(() => {
        //     dispatch(updateTodo(id, updates));
        // });

        dispatch(updateTodo(id, updates));
    };
};

export var startAddTodos = (todos) => {
    return (dispatch, getState) => {
        var uid = getState().auth.uid;
        var todosRef = firebaseRef.child('users/'+uid+'/todos');
        
        todosRef.once('value').then((snapshot) => {
            var todos = snapshot.val() || {};
            var parsedTodos = [];

            Object.keys(todos).forEach((todoId) => {
                parsedTodos.push(Object.assign({}, {id: todoId}, todos[todoId]));
            });
            dispatch(addTodos(parsedTodos));
        });
    }
};

export var startLogin = () => {
    return (dispatch, getState) => {
        return firebase.auth().signInWithPopup(githubProvider).then((result) => {
            console.log('Auth worked!', result);
        }, (error) => {
            console.log(error);
        })
    }
}

export var startLogout = () => {
    return (dispatch, getState) => {
        return firebase.auth().signOut().then(() => {
            dispatch(deleteTodos());
            console.log('logged out');
        })
    }
}

export var login = (uid) => {
    return {
        type: 'LOGIN',
        uid
    }
}

export var logout = () => {
    return {
        type: 'LOGOUT',
    }
}

export var deleteTodos = () => {
    return {
        type: 'DELETE_TODOS'
    }
}