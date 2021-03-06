(function  () {
	'use strict';

	angular.module('jivoxHack')
		.controller('AccountController', function  ( Account, $state, $window, $rootScope ) {
			var self = this;
			
			$rootScope.loggedIn = Account.isLoggedInFunc();
			
			console.log(Account.isloggedIn);

			self.logout = function(){
				Account.logout();
				self.loggedin = false;
			};
		});
})();