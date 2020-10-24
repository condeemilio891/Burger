let connection=require("./connection.js");



// Pringt QUESTION MARK

function printQuestionMarks(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
  }
//object relational mapper 
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }

    return arr.tostring();}
  
//ASK BAILEY IF THE PARAMETERS SHOULD REMAIN THE SAME
var orm={
    selectAll: function(tableInput,cb){
        var queryString="SELECT * FROM "+tableInput+";"
        connection.query(queryString, function(err,result){
            if (err) {throw err;}
            console.log(result);
            cb(result)
        })
        
    },
    insertOne: function(table,cols,vals,cb){
        var queryString="INSERT INTO "+table;

        queryString+="(";
        queryString+=cols.toString();
        queryString+=')'
        queryString+="VALUES ("
        queryString+= printQuestionMarks(vals.length);
        queryString+= ")";
        
        console.log(queryString);
        
        connection.query(queryString,vals, function (err,result){
            if(err) {throw err;}
            console.log(result)
            cb(result)
        })
        
    },
    updateOne: function(table,objColVals,condition,cb){ 
        //this seems qrong 
        let queryString="UPDATE"+table;
        queryString+="SET";
        queryString+=objToSql(objColVals);
        queryString+="WHERE";
        queryString+=condition;
        console.log(queryString)




        connection.query(queryString, function(err,result){
            if(err)
             {throw(err);
            }
            cb(result)
        })
        

    },

}
module.exports=orm