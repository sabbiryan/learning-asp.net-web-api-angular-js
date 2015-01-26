'use strict';

app.factory('Student', ['$resource', function ($resource) {
    var resource = $resource('http://localhost:49557//api//Student');
    return resource;
}
]);


/*controller*/


app.controller('HomeCtrl', [
        '$scope', 'Student', function($scope, Student) {
            $scope.Title = "Home";
            $scope.Heading = "Student List";
            $scope.students = [];

            Student.get(function(response) {
                console.log(response);
                $scope.students = response.Data;
            });

        }
    ])
    .controller('CreateCtrl', [
        '$scope', 'Student','$location',
        function ($scope, Student, $location) {

            $scope.Title = "Create Student";
            $scope.Heading = "Create";

            $scope.save = function() {
                Student.save({ Name: $scope.Name, Phone: $scope.Phone, Address: $scope.Address }, function(response) {
                    //console.log(response);
                    if (response) {
                        $scope.Notification = "Student is saved";
                        $scope.Name = "";
                        $scope.Phone = "";
                        $scope.Address = "";
                        $location.path('/home');
                    } else {
                        $scope.Notification = "Student is not saved";
                    }
                });

            };
        }
    ])
    //.controller('MyCtrl3', ['$scope', '$http', '$routeParams', function(scope, http, routeParams) {
    //    var userId = routeParams.userId;
    //    console.log(userId);

    //}])
    .controller('EditCtrl', [
        '$scope', 'Student', '$routeParams','$location',
        function ($scope, Student, $routeParams, $location) {
            var requestId = $routeParams.id;

            $scope.Title = "Edit Student";
            $scope.Heading = "Edit";

            Student.get({ request: JSON.stringify(requestId) }, function(response) {
                console.log(response);
                $scope.student = response.Data;
            });

            $scope.save = function () {
                Student.save($scope.student, function (response) {
                    //console.log(response);
                    if (response) {
                        $scope.student = {};
                        $location.path('/home');
                    } else {
                        $scope.message = "Failed! Try Again!";
                    }
                });

            };

        }
    ])
    .controller('DetailsCtrl', [
        '$scope', 'Student','$routeParams',
        function ($scope, Student, $routeParams) {
            var requestId = $routeParams.id;

            $scope.Title = "Details Student";
            $scope.Heading = "Details";

            Student.get({ request: JSON.stringify(requestId) }, function (response) {
                console.log(response);
                $scope.student = response.Data;
            });

        }
    ])
    .controller('DeleteCtrl', [
        '$scope', 'Student','$routeParams','$location',
        function ($scope, Student, $routeParams, $location) {
            var requestId = $routeParams.id;

            $scope.Title = "Delete Student";
            $scope.Heading = "Delete";

            Student.get({ request: JSON.stringify(requestId) }, function (response) {
                console.log(response);
                $scope.student = response.Data;
            });

            $scope.delete = function() {
                Student.remove({ request: JSON.stringify(requestId) }, function (response) {
                    console.log(response);
                    if (response.IsSuccess)
                        $location.path('/home');
                });
            }
        }
    ]);

