
(function () {
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope) {
		$scope.name = "";
		$scope.messageToDisplay = "";
		var comma = ',';
		
		$scope.check = function () {
			var lengthOfString = change_string_to_array($scope.name, comma);
			if ($scope.name == "") {
				$scope.messageToDisplay = "Please Input Valid number of Lunch";
			}
			else if (lengthOfString <= 3) {
				$scope.messageToDisplay = "Enjoy";
			}
			else if (lengthOfString > 3) {
				$scope.messageToDisplay = "To much!";
			}
		};

		function change_string_to_array(stringToSplit, comma) {
				var arrayOfString = stringToSplit.split(comma);
				console.log(arrayOfString);
				return arrayOfString.length;
		};

	}

})();