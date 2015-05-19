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

app.service('todoService', function() {

    var me = this;

    this.getAll = function() {
        var todos = localStorage.getItem('todos');
        if (todos) {
            return JSON.parse(todos);
        } else {
            return [];
        }
    };

    this.add = function (todo) {
        var todos = me.getAll();
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
        return todo;
    }
});
