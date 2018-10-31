var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuid(),
                    text: 'walk the dog'
                },
                {
                    id: uuid(),
                    text: 'clean the yard'
                }    
            ]
        };
    },
    handleAddTodo: function (todo) {
        var newTodo = {
            id: uuid(),
            text: todo
        }
        this.setState({
            todos: [
                ...this.state.todos,
                newTodo
            ]
        })
        //alert(todo);
    },
    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    },
    render: function () {
        var {todos} = this.state;
        return (
            <div className = "column small-centered medium-6 large-4 cont">
                <TodoSearch onSearch = {this.handleSearch}/>
                <TodoList todos = {todos} />
                <AddTodo onAddTodo = {this.handleAddTodo} />
            </div>
        )
    }
});

module.exports = TodoApp;