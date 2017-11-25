var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, column_name) {
        var queryString = "SELECT * FROM ?? ORDER BY ?? DESC";
        connection.query(queryString, [tableInput, column_name], function(err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
        });
    },
    insertOne: function()
};
