function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    const callback = function(){};
    return callback
}

function returnsAnAnonymousFunction(){
    return function(){}
}