var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');
var moment = require('moment');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: TodoAPI.getTodos()
        };
    },
    componentDidUpdate: function () {
        TodoAPI.setTodos(this.state.todos);
    },
    handleAddTodo: function (todo) {
        var newTodo = {
            id: uuid(),
            text: todo,
            completed: false,
            createdAt: moment().unix(),
            completedAt: undefined
        }
        this.setState({
            todos: [
                ...this.state.todos,
                newTodo
            ]
        });
        //alert(todo);
    },
    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    handleToggle: function (id) {
        var updatedTodos = this.state.todos.map((todo) => {
            if(id === todo.id) {
                todo.completed = !todo.completed;
                todo.completedAt = todo.completed ? moment().unix() : undefined;
            }
            return todo;
        });

        this.setState({
            todos: updatedTodos
        });
    },
    render: function () {
        var {todos, showCompleted, searchText} = this.state;
        var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

        return (
            <div className = "column small-centered medium-6 large-4 cont">
                <TodoSearch onSearch = {this.handleSearch}/>
                <TodoList todos = {filteredTodos} onToggle = {this.handleToggle}/>
                <AddTodo onAddTodo = {this.handleAddTodo} />
            </div>
        )
    }
});

module.exports = TodoApp;