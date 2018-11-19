var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var {Provider} = require('react-redux');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

//var TodoList = require('TodoList');
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';
//var Todo = require('Todo');

import {configure} from 'configureStore';

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render Todo component', () => {
        var todos = [{
            id: 1,
            text: 'do somethng',
            completed: false,
            completedAt: undefined,
            createdAt: 500
        }, {
            id: 2,
            text: 'do nothing',
            completed: false,
            completedAt: undefined,
            createdAt: 600
        }];
        var store = configure({
            todos
        });
        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedTodoList/>
            </Provider>
        )
        //var todoList = TestUtils.renderIntoDocument(<TodoList todos = {todos}/>);
        var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

        expect(todosComponents.length).toBe(todos.length);
    });

    it('should render empty messageif no todos', () => {
        var todos = [];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos = {todos}/>);
        var $el = $(ReactDOM.findDOMNode(todoList));
        expect($el.find('.container-message').length).toBe(1);
    });
});