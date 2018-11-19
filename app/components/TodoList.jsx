var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';
//var Todo = require('Todo');

export var TodoList = React.createClass({
    render: function () {
        var {todos} = this.props;
        var renderTodos = () => {
            if(todos.length === 0) {
                return (
                    <p className = "container-message">Nothing to do...</p>
                )
            }
            return todos.map((todo) => {
                return (
                    <Todo key = {todo.id} {...todo} /*onToggle = {this.props.onToggle}*/ /> 
                )
            });
        };
        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
});

export default connect(
    (state) => {
        return {
            todos: state.todos
        }
    }
)(TodoList);