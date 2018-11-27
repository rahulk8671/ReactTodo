var $ = require('jquery');

module.exports = {
    // setTodos: function (todos) {
    //     if ($.isArray(todos)) {
    //         localStorage.setItem('todos', JSON.stringify(todos));
    //         return todos;
    //     }
    // },
    // getTodos: function () {
    //     var stringTodos = localStorage.getItem('todos');
    //     var todos = [];
    //     try {
    //         todos = JSON.parse(stringTodos);
    //     } catch (e) {
    //         console.log(e);
    //     }

    //     if ($.isArray(todos)) {
    //         return todos;
    //     } else {
    //         return [];
    //     }
    // },
    filterTodos: function (todos, showCompleted, searchText) {
        var filteredTodos = todos;

        // Filter showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });

        // Sort todos with non-completed first
        filteredTodos.sort((a, b) => {
            if (!a.completed && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }
        });

        if (searchText.length !== 0) {
            filteredTodos = filteredTodos.filter((todo) => {
                if (todo.text.indexOf(searchText) > -1) {
                    return todo;
                }
            });
        }

        return filteredTodos;
    }
};