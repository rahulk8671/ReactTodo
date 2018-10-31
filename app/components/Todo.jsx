var React = require('react');

var Todo = React.createClass({
    render: function () {
        var {id, text} = this.props;
        return (
            <div>
                <span>{id}. {text}</span>
            </div>
        )
    }
});

module.exports = Todo;