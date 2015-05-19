var app = angular.module('TodoApp', ['todoServices']);

app.controller('TodoController', function ($http, todoResource) {

    var me = this;

    me.todos = todoResource.query();

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
        todoResource.save(me.newTodo, function (persistedTodo, responseHeaders) {
            me.todos.push(persistedTodo);
            me.newTodo = createBlankTodo();
        }, function (httpResponse) {
            console.log("ERROR while writing todo!");
        });
    }
});