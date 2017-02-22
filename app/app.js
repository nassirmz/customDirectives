angular
  .module('app', ['ui.router', 'app.oneUser', 'app.users'])
  .config(config);

  function config ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/users');

    $stateProvider
      .state('oneUser', {
        url: '/oneUser',
        templateUrl: 'components/oneUser/oneUser.html',
        controller: 'OneUserController',
        controllerAs: 'oneUserCtrl'
      })
      .state('users', {
        url: '/users',
        templateUrl: 'components/users/users.html',
        controller: 'UsersController',
        controllerAs: 'usersCtrl',
      });
  }
