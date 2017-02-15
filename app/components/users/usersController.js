angular
  .module('app.users', [])
  .controller('UsersController', UsersController);

UsersController.$inject = ['usersFactory'];

function UsersController (usersFactory) {
  var vm = this;

  getUsers();

  function getUsers() {
    usersFactory.getUsers()
      .then(function (result) {
        vm.users = result.data;
      });
  }
}