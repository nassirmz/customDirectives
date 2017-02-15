angular
  .module('app', ['app.users', 'ngRoute'])
  .config(config);

  function config ($routeProvider) {
    $routeProvider
      .when('/oneUser', {
        templateUrl: 'components/oneUser/oneUser.html',
        controller: 'OneUserController',
        controllerAs: 'oneUserCtrl'
      })
      .when('/', {
        templateUrl: 'components/users/users.html',
        controller: 'UsersController',
        controllerAs: 'usersCtrl',
      });
  }
