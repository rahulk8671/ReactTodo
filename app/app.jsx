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

//import './../playground/index';

// store.subscribe(() => {
//     console.log('new state', store.getState());

//     TodoAPI.setTodos(store.getState().todos);
// });

// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());

// store.dispatch(actions.addTodo('Clean the yard'));
// store.dispatch(actions.setSearchText('yard'));
// store.dispatch(actions.toggleShowCompleted());

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//app css
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <Provider store = {store}>
        <Router history = {hashHistory}>
            <Route path = "/">
                <Route path = "todos" component = {TodoApp}/>
                <IndexRoute component = {Login}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
)