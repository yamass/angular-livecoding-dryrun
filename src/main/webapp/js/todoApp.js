var app = angular.module('TodoApp', [])
        .controller('TodoController', function() {

            this.todos = [{
                title: "Wash car",
                done: false
            },{
                title: "Get a haircut",
                done: true
            }];

            this.numberOfDoneTodos = function() {
                return this.todos.filter(function(todo) {
                    return !(todo.done);
                }).length;
            }

        });
