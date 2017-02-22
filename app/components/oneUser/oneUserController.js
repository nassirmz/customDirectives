angular
  .module('app.oneUser', [])
  .controller('OneUserController', OneUserController);

OneUserController.$inject = ['oneUserFactory'];

function OneUserController(oneUserFactory) {
  var vm = this;
  getOneUser();
  function getOneUser() {
    return oneUserFactory.getOneUser().then(function (resp) {
      vm.user = resp.data;
      console.log(vm.user);
    });
  }
}
