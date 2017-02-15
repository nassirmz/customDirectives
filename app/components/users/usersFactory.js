angular
  .module('app.users')
  .factory('usersFactory', usersFactory)

function usersFactory ($http) {
  return {
    getUsers: getUsers,
  };

  function getUsers() {
   return $http.get('https://jsonplaceholder.typicode.com/users/')
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