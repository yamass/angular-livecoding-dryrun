var todoServicesModule = angular.module('todoServices', []);

todoServicesModule.value('myValue', "Hey, this is myValue's value!!");

todoServicesModule.factory('todoService', function() {

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