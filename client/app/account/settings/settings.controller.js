'use strict';

angular.module('xxxApp')
  .controller('SettingsCtrl', function ($scope, User, Auth) {
    $scope.errors = {};

    $scope.changePassword = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        Auth.changePassword( $scope.user.oldPassword, $scope.user.newPassword )
        .then( function() {
          $scope.message = 'Clave bien cambiada.';
        })
        .catch( function() {
          form.password.$setValidity('mongoose', false);
          $scope.errors.other = 'Clave incorrecta';
          $scope.message = '';
        });
      }
		};
  });
