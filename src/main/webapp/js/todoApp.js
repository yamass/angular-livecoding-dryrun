var app = angular.module('TodoApp', ['todoServices']);

app.controller('TodoController', function ($http) {

    var me = this;

    me.todos = [];

    $http.get("http://localhost:8080/data/todo").success(function (todosFromServer) {
        me.todos = todosFromServer;
    });

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
        $http.post("http://localhost:8080/data/todo", todo)
                .success(function (persistedTodo) {
                    me.todos.push(persistedTodo);
                    me.newTodo = createBlankTodo();
                }).error(function () {
                    console.log("ERROR while writing todo!");
                });
    }
});