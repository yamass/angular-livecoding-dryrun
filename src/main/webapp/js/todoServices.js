var todoServicesModule = angular.module('todoServices', ['ngResource']);

todoServicesModule.factory('todoResource', ['$resource', function ($resource) {
    return $resource('/data/todo/:id');
}]);