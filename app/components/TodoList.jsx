var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';
//var Todo = require('Todo');
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
    render: function () {
        var {todos, showCompleted, searchText} = this.props;
        var renderTodos = () => {

            if(TodoAPI.filterTodos(todos, showCompleted, searchText).length === 0) {
                return (
                    <p className = "container-message">Nothing to do...</p>
                )
            }
            
            return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
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
        return state;
    }
)(TodoList);