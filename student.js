exports.getnostudent=function(){
    const prompt=require('prompt');
    prompt.start();
    prompt.get(['studentscount'],function(err,result){
    if(err) {console.log("errror");
return studentscount;
    }
    });
    }
    
    
    exports.getdetails=function(){
    const prompt=require('prompt');
    prompt.start();
    prompt.get(['name','regno','dept'],function(err,result){
    if(err) {console.log("errror");

    }
    });
    }
    exports.getgrade=function(){
    const prompt=require('prompt');
    prompt.start();
    prompt.get(['tsub','subname','mark'],function(err,result){
    if(err) {console.log("errror");
    }
    });
    }
    