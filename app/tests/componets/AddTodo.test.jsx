var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';

var {AddTodo} = require('AddTodo');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should dispatch ADD_TODO when valid todo object', () => {
        // var todo = {
        //     id: 1233,
        //     text: 'something',
        //     completed: false,
        //     createdAt: 12234
        // };
        var action = actions.startAddTodo('check mail');
        
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch = {spy}/>);

        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todo.value = 'check mail';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should not dispatch ADD_TODO when invalid todo', () => {
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo = {spy}/>);

        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todo.value = '';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});