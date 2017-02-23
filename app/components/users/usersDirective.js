angular
  .module('app.users')
  .directive('userElement', userElement);

function userElement() {

  //Directive Definition Object
  var directive = {
    restrict: 'EA',
    replace: true,
    link: link,
    templateUrl: 'components/users/usersView.html',
    scope: {
      userInfo: '=',
    },
  }
  return directive;

  //link function to manipulate the DOM
  function link(scope, element, attr) {
    element.on('mouseenter', function () {
      element.css('opacity', '0.5');
    });
    element.on('mouseleave', function () {
      element.css('opacity', '1.0');
    });
  }
}