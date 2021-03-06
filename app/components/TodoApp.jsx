var React = require('react');
import TodoList from 'TodoList';
//var TodoList = require('TodoList');
import AddTodo from 'AddTodo';
//var AddTodo = require('AddTodo');
import TodoSearch from 'TodoSearch';
//var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');
var moment = require('moment');
//var TodoAPI = require('TodoAPI');
import * as Redux from 'react-redux';
import * as actions from 'actions';

var TodoApp = React.createClass({
    onLogout (e) {
        var {dispatch} = this.props;
        e.preventDefault();
        dispatch(actions.startLogout());
    },
    // getInitialState: function () {
    //     return {
    //         showCompleted: false,
    //         searchText: '',
    //         todos: TodoAPI.getTodos()
    //     };
    // },
    // componentDidUpdate: function () {
    //     TodoAPI.setTodos(this.state.todos);
    // },
    // handleAddTodo: function (todo) {
    //     var newTodo = {
    //         id: uuid(),
    //         text: todo,
    //         completed: false,
    //         createdAt: moment().unix(),
    //         completedAt: undefined
    //     }
    //     this.setState({
    //         todos: [
    //             ...this.state.todos,
    //             newTodo
    //         ]
    //     });
    //     //alert(todo);
    // },
    // handleSearch: function (showCompleted, searchText) {
    //     this.setState({
    //         showCompleted: showCompleted,
    //         searchText: searchText.toLowerCase()
    //     });
    // },
    // handleToggle: function (id) {
    //     var updatedTodos = this.state.todos.map((todo) => {
    //         if(id === todo.id) {
    //             todo.completed = !todo.completed;
    //             todo.completedAt = todo.completed ? moment().unix() : undefined;
    //         }
    //         return todo;
    //     });

    //     this.setState({
    //         todos: updatedTodos
    //     });
    // },
    render: function () {
        // var {todos, showCompleted, searchText} = this.state;
        // var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

        return (
            <div>
            <div className = "page-actions">
                    <a href = "#" onClick = {this.onLogout}>Logout</a>
            </div>
                <h1 className = "page-title">Todo App</h1>
            <div className = "row">
                <div className = "column small-centered small-11 medium-6 large-5">
                    <div className = "container">
                    <TodoSearch /*onSearch = {this.handleSearch}*/ />
                    <TodoList /*todos = {filteredTodos} onToggle = {this.handleToggle}*//>
                    <AddTodo /*onAddTodo = {this.handleAddTodo}*/ />
                    </div>
                </div>    
            </div>
            </div>
        )
    }
});

export default Redux.connect()(TodoApp);
//module.exports = TodoApp;