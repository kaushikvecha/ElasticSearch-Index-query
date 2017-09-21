var app = angular.module('testApp', ['elasticsearch']);

app.factory('elasticClient', ['esFactory', function (esFactory) {
    return esFactory({
        location: 'localhost:9200',
        sniffOnStart: true,
        sniffInterval: 300000
    });
}]);