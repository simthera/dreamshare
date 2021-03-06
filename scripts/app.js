/**
 * Created by smetshile on 2018/02/27.
 */
var app = angular.module('myApp', []);
app.controller('mainController', function ($scope) {
    $scope.title = "Holiday Destinations";
    $scope.destinations = [
        {
            name: 'South Africa',
            seasondate: new Date('2018', '03', '08'),
            coverimage: 'images/southafrica.jpg',
            votes: 0,
            pricerange: 25000
        },
        {
            name: 'Botswana',
            seasondate: new Date('2018', '04', '08'),
            coverimage: 'images/botswana.jpg',
            votes: 0,
            pricerange: 26000
        },
        {
            name: 'Zambia',
            seasondate: new Date('2018', '05', '08'),
            coverimage: 'images/zambia.jpg',
            votes: 0,
            pricerange: 18000
        },
        {
            name: 'Zimbabwe',
            seasondate: new Date('2018', '06', '05'),
            coverimage: 'images/zimbabwe.jpg',
            votes: 0,
            pricerange: 10000
        },
        {
            name: 'Nigeria',
            seasondate: new Date('2018', '07', '02'),
            coverimage: 'images/southafrica.jpg',
            votes: 0,
            pricerange: 12000
        },
        {
            name: 'Tanzania',
            seasondate: new Date('2018', '08', '20'),
            coverimage: 'images/botswana.jpg',
            votes: 0,
            pricerange: 22
        }
    ];
    $scope.plusOne = function(index) {
        $scope.destinations[index].votes += 1;
    };
});