(function  () {
	'use strict';

	angular.module('jivoxHack')
		.controller('AccountController', function  ( Account, $state, $window ) {
			var self = this;
			
			self.loggedin = Account.isloggedIn();
			
			console.log(Account.isloggedIn());

			self.logout = function(){
				Account.logout();
				self.loggedin = false;
			};
		});
})();