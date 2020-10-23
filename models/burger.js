
var orm = require ("../config/Orm.js")
//do i have to put .js 

var burger ={
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        })
    },
    //parameteers not sure about
    insertOne: function(cols,vals,cb){
        orm.insertOne("burgers",cols,vals,function(res){
            cb(res)
        });
    },
        updateOne: function(objColVals,condition,cb){
            orm.updateOne("burgers",objColVals,condition,function(res){
                cb(res);
            })
        }
    }
    module.exports=burger
