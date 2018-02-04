
(function () {
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope) {
		$scope.name = "";
		$scope.messageToDisplay = "";
		var comma = ',';
		$scope.extra_style1 = "";
		$scope.extra_style2 = "";
		
		$scope.check = function () {
			var lengthOfString = change_string_to_array($scope.name, comma);
			if ($scope.name == "") {
				$scope.messageToDisplay = "Please Input name of Lunch first!";
				$scope.extra_style1 = "without-data_inputArea";
				$scope.extra_style2 = "without-data_font";
			}
			else if (lengthOfString <= 3) {
				$scope.messageToDisplay = "Enjoy!";
				$scope.extra_style1 = "with-data_inputArea";
				$scope.extra_style2 = "with-data_font";
			}
			else if (lengthOfString > 3) {
				$scope.messageToDisplay = "To much!";
				$scope.extra_style1 = "with-data_inputArea";
				$scope.extra_style2 = "with-data_font";
			}
		};

		function change_string_to_array(stringToSplit, comma) {
				var arrayOfString = stringToSplit.split(comma);
				console.log(arrayOfString);
				return arrayOfString.length;
		};

	}

})();