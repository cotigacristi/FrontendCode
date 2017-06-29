/**
 * Created by Gabriel.Tabus on 6/28/2017.
 */
app.controller('ShopController', ['$scope', function($scope){
    $scope.shopList = [
        {
            label: "",
            id: 0,
            img: "",
            price: 0
        }
    ];
    $scope.productsList = [
        {
            label: "Masina de spalat",
            id: 421,
            img: "resurse/spalat.jpg",
            price: 800
        },
        {
            label: "Masina de ras",
            id: 643,
            img: 'resurse/ras.jpg',
            price: 75
        },
        {
            label: "Bong",
            id: 224,
            img: 'resurse/bong.png',
            price: 100
        },
        {
            label: "Cuptor",
            id: 114,
            img: 'resurse/cuptor.jpg',
            price: 50
        }
    ];


    $scope.addProduct = function(idProdus)
    {
        var elem;
        for(var each in $scope.productsList)
            if($scope.productList[each].id==idProdus)
                elem=$scope.productList[each];
        $scope.shopList.push(new shopList(elem.label, elem.id, elem.img, elem.price));
    };
    $scope.getProduct = function(idProdus)
    {
        for(var each in $scope.productsList)
            if($scope.productsList[each].id==idProdus)
                $scope.addProduct($scope.productsList[each]);

    };

    $scope.removeProduct = function(idProdus)
    {
        var elem;
        for(var each in $scope.shopList)
            if($scope.shopList[each].id==idProdus)
                elem=each;
        $scope.shopList.splice(elem,1);
    }
}
]);