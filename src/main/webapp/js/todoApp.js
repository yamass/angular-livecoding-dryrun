var app = angular.module('TodoApp', []);

app.controller('TodoController', function (myValue, todoService) {

    var me = this;

    this.todos = todoService.getAll();

    function createBlankTodo() {
        return {
            title: "",
            done: false
        }
    }

    this.newTodo = createBlankTodo();

    this.numberOfDoneTodos = function () {
        return me.todos.filter(function (todo) {
            return !(todo.done);
        }).length;
    };

    this.addTodo = function (todo) {
        var persistedTodo = todoService.add(todo);
        this.todos.push(persistedTodo);
        this.newTodo = createBlankTodo();
    }
});

app.value('myValue', "Hey, this is myValue's value!!");

app.factory('todoService', function() {

    function getAll() {
        var todos = localStorage.getItem('todos');
        if (todos) {
            return JSON.parse(todos);
        } else {
            return [];
        }
    }

    function add(todo) {
        var todos = getAll();
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
        return todo;
    }

    return {
        getAll: getAll,
        add: add
    };

});
