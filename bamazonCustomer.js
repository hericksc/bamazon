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
        console.log("---------------------------");
        console.log(result);
        console.log("------------------------");
        start(result);
        // units();
       
    });

});

var query = connection.query

function start(products) {
// variables for product names and constructing an object//
    var productsObj = {};
    var productNames = [];
//looping through products and pushing the product_name into an array//
    for (var i = 0; i < products.length; i++) {
        productNames.push(products[i].product_name);
        productsObj[products[i].product_name] = products[i];
    }
    inquirer
        .prompt({
            name: "productList",
            type: "list",
            message: "What is the ID of the item you would like to Purchase?",
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
            console.log(answer,[product.stock_quantity - answer.Quantity,product.id]);

            if (product.stock_quantity <= 0) {
                console.log("Insufficient Quantity")
                // start();
            }
            //Add code that checks stock quantity before you minus the amount/  /
          else 
            connection.query({ sql: "UPDATE products SET stock_quantity = ? WHERE id = ?", values: [product.stock_quantity - answer.Quantity,product.id] }, function (err, result) {
                if (err) throw err;
                console.log("---------------------------");
                console.log (result);
                console.log("------------------------");
                // start(result);
                // units();
                connection.end();
            });

        });
}