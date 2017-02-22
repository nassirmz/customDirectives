angular
  .module('app.oneUser')
  .factory('oneUserFactory', oneUserFactory);

oneUserFactory.$inject = ['$http'];

function oneUserFactory ($http) {
  return {
    getOneUser: getOneUser,
  };

  function getOneUser() {
   return $http.get('https://jsonplaceholder.typicode.com/users/1')
    .then(successResponse)
    .catch(failureResponse);

    function successResponse(resp) {
      return resp;
    }

    function failureResponse(error) {
      console.log(error);
    }
  };
}
