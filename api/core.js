// public/core.js
var scotchTodo = angular.module('scotchTodo', []);

function mainController($scope, $http) {
	$scope.formData = {};

	// when landing on the page, get all todos and show them
	$http.get('/api/todos')
		.success(function(data) {
			$scope.todos = data;
			console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	// get the todo content and put it on the page
	//$scope.refreshTodo = function() {
	setInterval(function(){
		console.log('called');
		$http.get('/api/todos')
			.success(function(data) {
				$scope.todos = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	},500);
	
	setInterval(function(){
		console.log('called');
		$http.post('/api/launch', [{id:"1",delay:"1000"},{id:"2",delay:"2000"},{id:"3","delay":"3000"},{id:"4","delay":"3000"},{id:"5","delay":"3000"},{id:"6","delay":"3000"},{id:"7","delay":"3000"},{id:"8","delay":"3000"}])
			.success(function(data) {
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	},1100);
	
	
		
	// when submitting the add form, send the text to the node API
	$scope.createTodo = function() {
			if($scope.formData.text != null){
			$http.post('/api/todos', $scope.formData)
				.success(function(data) {
					$scope.formData = {}; // clear the form so our user is ready to enter another
					$scope.todos = data;
					console.log(data);
				})
				.error(function(data) {
					console.log('Error: ' + data);
				});
			}
		};
	
	// alert the user with what is in the add form then submit the add form, send the text to the node API
	$scope.confirmTodo = function() {
		alert($scope.formData.text);
		$http.post('/api/todos', $scope.formData)
			.success(function(data) {
				$scope.formData = {}; // clear the form so our user is ready to enter another
				$scope.todos = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	// delete a todo after checking it
	$scope.deleteTodo = function(id) {
		$http.delete('/api/todos/' + id)
			.success(function(data) {
				$scope.todos = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

}
