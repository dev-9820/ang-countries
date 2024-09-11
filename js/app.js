// Define the AngularJS app module
var app = angular.module('countryApp', []);

// Define the controller for handling countries
app.controller('CountryController', function($scope, $http) {
  
  // Load countries from JSON file
  $http.get('data/data.json').then(function(response) {
    $scope.countries = response.data;
  });

  // Filter countries by region
  $scope.regionFilter = function(region) {
    return function(country) {
      if (region === '' || !region) return true;
      return country.region === region;
    };
  };

  // Select a country to view details
  $scope.selectCountry = function(country) {
    $scope.selectedCountry = country;
  };

  // Deselect a country to go back to the list view
  $scope.deselectCountry = function() {
    $scope.selectedCountry = null;
  };
});
