angular
  .module('app.users')
  .directive('userElement', userElement);

function userElement() {
  var directive = {
    restrict: 'EA',
    replace: false,
    link: link,
    templateUrl: 'components/users/usersView.html',
    controller: 'UsersController',
    controllerAs: 'usersCtrl',
    scope: {
      userInfo: '=',
    },
  }
  return directive;

  function link(scope, element, attr) {
    console.log(scope.userInfo, 'userDirective');
  }
}