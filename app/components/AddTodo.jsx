var React = require('react');

var AddTodo = React.createClass({
    onSubmit: function (e) {
        e.preventDefault();
        var todo = this.refs.todo.value;
        if (todo.length > 0) {
            this.refs.todo.value = '';
            this.props.onAddTodo(todo);
        } else {
            this.refs.todo.focus();
        }
        
    },
    render: function () {
        
        return (
            <div className = "cont">
                <form ref = "form" onSubmit = {this.onSubmit} className = "countdown-form">
                    <input type = "text" ref = "todo" placeholder = "Enter todo"></input>
                    <button className = "button expanded">Add Todo</button>
                </form>
            </div>
        )
    }
});

module.exports = AddTodo;