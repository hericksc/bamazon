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
        start();
    });
});

function start() {
    inquirer
        .prompt({
            name: "productList",
            type: "rawlist",
            message: "What would you like to Purchase?",
            choices: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"],
        })

        .then(function (answer) {
                // based on their answer, either call the bid or the post functions
                if (answer === "Item 1") {
                    units();
                }
                    else {
                        console.log("Out of Stock");
                    }
                });
        }



    function units() {
            inquirer
            .prompt([{
                name: "Quantity",
                type: "input",
                message: "How Many Would You Like to Purchse?",
            }])
       
        }