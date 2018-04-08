angular.module('MyApp', ['ngRoute', 'satellizer'])
  .config(function($routeProvider, $locationProvider, $authProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        resolve: { loginRequired: loginRequired }
      })
      .when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl',
        resolve: { skipIfAuthenticated: skipIfAuthenticated }
      })
      .when('/signup', {
        templateUrl: 'partials/signup.html',
        controller: 'SignupCtrl',
        resolve: { skipIfAuthenticated: skipIfAuthenticated }
      })
      .when('/account', {
        templateUrl: 'partials/profile.html',
        controller: 'ProfileCtrl',
        resolve: { loginRequired: loginRequired }
      })
      .when('/forgot', {
        templateUrl: 'partials/forgot.html',
        controller: 'ForgotCtrl',
        resolve: { skipIfAuthenticated: skipIfAuthenticated }
      })
      .when('/create', {
        templateUrl: 'partials/create.html',
        controller: 'CreateCtrl',
        resolve: { loginRequired: loginRequired }
      })
      .when('/admin', {
        templateUrl: 'partials/admin.html',
        controller: 'CreateCtrl',
        resolve: { loginRequired: loginRequired }
      })
      .when('/deleteuser', {
        templateUrl: 'partials/deleteuser.html',
        controller: 'CreateCtrl',
        resolve: { loginRequired: loginRequired }
      })
      .when('/makeadmin', {
        templateUrl: 'partials/makeadmin.html',
        controller: 'ForgotCtrl',
        resolve: { loginRequired: loginRequired }
      })
      .when('/addcourse', {
        templateUrl: 'partials/addcourse.html',
        controller: 'ForgotCtrl',
        resolve: { loginRequired: loginRequired }
      })
      
      .when('/reset/:token', {
        templateUrl: 'partials/reset.html',
        controller: 'ResetCtrl',
        resolve: { skipIfAuthenticated: skipIfAuthenticated }
      })
      .otherwise({
        templateUrl: 'partials/404.html'
      });

    $authProvider.loginUrl = '/login';
    $authProvider.signupUrl = '/signup';

    function skipIfAuthenticated($location, $auth) {
      if ($auth.isAuthenticated()) {
        $location.path('/');
      }
    }

    function loginRequired($location, $auth) {
      if (!$auth.isAuthenticated()) {
        $location.path('/login');
      }
    }
  })
  .run(function($rootScope, $window) {
    if ($window.localStorage.user) {
      $rootScope.currentUser = JSON.parse($window.localStorage.user);
    }
  });
