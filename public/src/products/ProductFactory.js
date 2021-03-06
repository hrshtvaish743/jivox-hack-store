(function() {
	'use strict';

	angular.module('jivoxHack')
		.factory('Product', function($http, $window) {
			return{
				getProductDetails: function (pro_id) {
					return $http.get('/products/'+pro_id);
				},
				addRating: function (pro_id,data) {
					return $http.post('/consumer/ratings/'+pro_id,data);
				},
				getReview: function (pro_id) {
					return $http.get('/ratings/' + pro_id);
				}
			}

		});
})();