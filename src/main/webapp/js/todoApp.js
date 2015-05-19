var app = angular.module('TodoApp', ['todoServices']);

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