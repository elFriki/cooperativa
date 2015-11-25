'use strict';

angular.module('xxxApp')
  .controller('ShellCtrl', function ($mdSidenav, $mdDialog, $scope, $location, Auth) {

    
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.toggleLeft = function() {
      $mdSidenav('left').toggle();
    };

    var originatorEv;
    $scope.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };

    $scope.notificationsEnabled = true;
    $scope.toggleNotifications = function() {
      $scope.notificationsEnabled = !$scope.notificationsEnabled;
    };

    $scope.redial = function() {
      $mdDialog.show(
        $mdDialog.alert()
          .targetEvent(originatorEv)
          .clickOutsideToClose(true)
          .parent('body')
          .title('De repente, una rellamada')
          .content('Acabas de llamar a un amigo; el cual te contó una movida chupi. Toma una cookie!')
          .ok('Fue fácil')
        );
      originatorEv = null;
    };

    $scope.checkVoicemail = function() {
      // This never happens.
    };

    $scope.showAddDialog = function($event) {
      var parentEl = angular.element(document.body);
      $mdDialog.show({
        parent: parentEl,
        targetEvent: $event,
        templateUrl: 'components/shell/dialog/dialog.html',
        controller: 'DialogController'
      });
    };
  });
