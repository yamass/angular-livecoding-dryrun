var app = angular.module('TodoApp', []);

app.controller('TodoController', function (myValue) {

    this.todos = [{
        title: "Wash car",
        done: false
    }, {
        title: "Get a haircut",
        done: true
    }];

    function createBlankTodo() {
        return {
            title: "",
            done: false
        }
    }

    this.newTodo = createBlankTodo();

    this.numberOfDoneTodos = function () {
        return this.todos.filter(function (todo) {
            return !(todo.done);
        }).length;
    };

    this.addTodo = function (todo) {
        this.todos.push(todo);
        this.newTodo = createBlankTodo();
        console.log(myValue);
    }
});

app.value('myValue', "Hey, this is myValue's value!!");
