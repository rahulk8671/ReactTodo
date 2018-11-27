var expect = require('expect');
var actions = require('actions');
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

var createMockStore = configureMockStore([thunk]); 

describe('Actions', () => {
    it('should generate search text action', () => {
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'dog'
        };
        var res = actions.setSearchText(action.searchText);

        expect(res).toEqual(action);
    });

    it('should generate add todo action', () => {
        var action = {
            type: 'ADD_TODO',
            todo: {
                id: 123,
                text: 'something',
                completed: false,
                createdAt: 12334
            }
        };
        var res = actions.addTodo(action.todo);

        expect(res).toEqual(action);
    });

    it('should generate toggle show completed action', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED',
        };
        var res = actions.toggleShowCompleted();

        expect(res).toEqual(action);
    });

    it('should generate toggleTodo action', () => {
        var action = {
            type: 'TOGGLE_TODO',
            id: '123'
        };
        var res = actions.toggleTodo(action.id);

        expect(res).toEqual(action);
    });

    it('should generate add todos action object', () => {
        var todos = [{
            id: 111,
            text: 'dfi',
            completed: false,
            completedAt: undefined,
            createdAt: 500
        }];
        var action = {
            type: 'ADD_TODOS',
            todos
        };
        var res = actions.addTodos(todos);

        expect(res).toEqual(action);
    });

    // it('should create todo and dispatch ADD_TODO', (done) => {
    //     const store = createMockStore({});
    //     const todoText = 'my-todo';
    //     store.dispatch(actions.startAddTodo(todoText)).then(() => {
    //         const actions = store.getActions();
    //         expect(actions[0]).toInclude({
    //             type: 'ADD_TODO'
    //         });
    //         expect(actions[0].todo).toInclude({
    //             text: todoText
    //         });
    //         done();
    //     }).catch(done);
    // });

});