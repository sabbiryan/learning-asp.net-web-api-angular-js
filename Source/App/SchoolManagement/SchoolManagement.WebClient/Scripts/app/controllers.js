'use strict';

angular.module('myApp.factories', []).factory('Student', ['$resource', function ($resource) {
    var resource = $resource('http://localhost:49557//api//Student', {}, { get: { method: 'GET', isArray: true } });
    return resource;
}
]);


/*controller*/

angular.module('myApp.controllers', [])

    //.controller('MyCtrl1', ['$scope', function ($scope) {
    //    $scope.name = "Tiger";
    //    $scope.students = [];
    //    $scope.students.push({ Id: 1, name: "Tiger", Address: "Amazon" });
    //    $scope.students.push({ Id: 2, name: "Lion", Address: "Sundarbon" });
    //    $scope.students.push({ Id: 3, name: "Fox", Address: "Forest" });
    //    $scope.students.push({ Id: 4, name: "Pithon", Address: "Amazon" });
    //  }])
    .controller('MyCtrl1', [
        '$scope', 'Student', function($scope, student) {
            $scope.Title = "Home";
            $scope.Heading = "Student List";
            $scope.students = [];

            student.get(function(response) {
                //console.log(response);
                $scope.students = response;
            });

        }
    ])
    .controller('MyCtrl2', [
        '$scope', 'Student', function($scope, student) {
            $scope.Title = "Create Student";
            $scope.Heading = "Create New Student";

            $scope.save = function() {
                student.save({ Name: $scope.Name, Phone: $scope.Phone, Address: $scope.Address }, function(response) {
                    //console.log(response);
                    if (response) {
                        $scope.Notification = "Student is saved";
                        $scope.Name = "";
                        $scope.Phone = "";
                        $scope.Address = "";
                    } else {
                        $scope.Notification = "Student is not saved";
                    }
                });

            };
        }
    //])
    //.controller('MyCtrl2', [
    //    '$scope', 'Student', function($scope, student) {
    //        $scope.Title = "Create Student";
    //        $scope.Heading = "Create New Student";

    //        $scope.save = function() {
    //            student.save({ Name: $scope.Name, Phone: $scope.Phone, Address: $scope.Address }, function(response) {
    //                //console.log(response);
    //                if (response) {
    //                    $scope.Notification = "Student is saved";
    //                    $scope.Name = "";
    //                    $scope.Phone = "";
    //                    $scope.Address = "";
    //                } else {
    //                    $scope.Notification = "Student is not saved";
    //                }
    //            });

    //        };

    //    }
    ]);

