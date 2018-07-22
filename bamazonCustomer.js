var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Dmboar#31",
    database: "bamazon_DB",
});

connection.connect(function (err) {
    // if (err) throw err;
    connection.query("Select * FROM products", function (err, result) {
        if (err) throw err;
        console.log("-----------------------------------------------------");
        console.log(result);
        console.log("------------------------------------------------------");
        start(result);
        // units();
       
    });

});

var query = connection.query

function start(products) {
//constructing an object based on user choice//
    var productsObj = {};
    var productNames = [];
//looping through products//
    for (var i = 0; i < products.length; i++) {

        //pushing the product name that is chosen into the productNames array//
        productNames.push(products[i].product_name);
        productsObj[products[i].product_name] = products[i];
    }
    inquirer
        .prompt({
            name: "productList",
            type: "list",
            message: "Select the itme you would like to Purchase?",
            choices: productNames,
        })

        .then(function (answer) {

            units(productsObj[answer.productList]);
        });
}

function units(product) {

    inquirer
        .prompt([{
            name: "Quantity",
            type: "input",
            message: "How Many Would You Like to Purchase?",
        }])
        .then(function (answer) {
            //Subtracting purchased quantity from stock_quantity in mysql database//
            console.log("You are puchasing:", answer,["Remaining Inventory:",product.stock_quantity - answer.Quantity,"Product ID #:", product.id]);

            //checks to see if there is enough inventory to fill the order//
            if (product.stock_quantity < answer.Quantity) {
                console.log("Insufficient Quantity")
            
            }
            
          else 
            connection.query({ sql: "UPDATE products SET stock_quantity = ? WHERE id = ?", values: [product.stock_quantity - answer.Quantity,product.id] }, function (err, result) {
                if (err) throw err;
                console.log("---------------------------------------");
                console.log ("Database Updated Results", result);
                console.log("---------------------------------------");
                // start(result);
                // units();
                connection.end();
            });

        });
}