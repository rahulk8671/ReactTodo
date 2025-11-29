var React = require('react');
var ReactDOM = require('react-dom'); 
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//var TodoApp = require('TodoApp');
import TodoApp from 'TodoApp';
var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

import Login from 'Login';
// import firebase from 'app/firebase';

// firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//         store.dispatch(actions.login(user.uid));
//         store.dispatch(actions.startAddTodos());
//         hashHistory.push('/todos');
//     } else {
//         store.dispatch(actions.logout());
//         hashHistory.push('/');
//     }
// })

//import './../playground/index';

// store.subscribe(() => {
//     console.log('new state', store.getState());

//     TodoAPI.setTodos(store.getState().todos);
// });

// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));


// store.dispatch(actions.addTodo('Clean the yard'));
// store.dispatch(actions.setSearchText('yard'));
// store.dispatch(actions.toggleShowCompleted());

//load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')

$(document).foundation();

var requireLogin = (nextState, replace, next) => {
    if (!firebase.auth().currentUser) {
        replace('/');
    }
    next();
} 

var redirectIfLoggedIn = (nextState, replace, next) => {
    if (firebase.auth().currentUser) {
        replace('/todos');
    }
    next();
} 

//app css
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <Provider store = {store}>
        <Router history = {hashHistory}>
            <Route path = "/">
                <Route path = "todos" component = {TodoApp} />
                {/* <IndexRoute component = {Login} onEnter = {redirectIfLoggedIn}/> */}
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
)