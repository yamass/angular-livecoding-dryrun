var app = angular.module('TodoApp', [])
        .controller('TodoController', function () {

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

            this.addTodo = function(todo) {
                this.todos.push(todo);
                this.newTodo = createBlankTodo();
            }

        });
