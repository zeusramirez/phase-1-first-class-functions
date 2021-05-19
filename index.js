function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction(){
    function namedFunction(){
    }
    return namedFunction
}

function returnsAnAnonymousFunction(){
    return () => console.log('this is an anonymous function')
}