app.controller('mainController', function ($scope, elasticClient) {
    $scope.results = [];
    $scope.autoCompleteResults = [];
    $scope.search = {
        queryTerm: '',
        city: ''
    };

    $scope.autoComplete = function () {
        elasticClient.search({
            index: 'indeed-jobs',
            
            body: {
                query: {
                    terms:{
                        _id:["1","2"]
                    }
                    }
                
            }
        }).then(function (response) {
            $scope.autoCompleteResults = response.hits.hits;
        });
    };

    $scope.search = function () {
        elasticClient.search({
            index: 'indeed-jobs',
            body: {
                query:{
                filtered:{
                query: {
                    multi_match: {
                        query: $scope.search.queryTerm,
                        type: 'phrase',
                        fields: [
                            'title',
                            'summary'
                        ],
                      // operator: 'and'
                    }
                
                },
                filter:{
                    term:{
                        type:'best_fields',
                        city:$scope.search.city
                        
                    }

                }
            }
        }
            }
        }).then(function (response) {
            $scope.results = response.hits.hits;
                console.log($scope.results);
        });
    }
});