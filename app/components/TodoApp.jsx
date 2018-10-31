var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            todos: [
                {
                    id: 1,
                    text: 'walk the dog'
                },
                {
                    id: 2,
                    text: 'clean the yard'
                }    
            ]
        };
    },
    handleAddTodo: function (todo) {
        // var newTodo = {
        //     id: 3,
        //     text: todo
        // }
        // this.state.todos.push(newTodo);
        alert(todo);
    },
    render: function () {
        var {todos} = this.state;
        return (
            <div className = "column small-centered medium-6 large-4">
                <TodoList todos = {todos} />
                <AddTodo onAddTodo = {this.handleAddTodo}/>
            </div>
        )
    }
});

module.exports = TodoApp;