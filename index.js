function Monday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
}

function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
   return function namedLoL(){
     return "boo";
   };
};
function returnsAnAnonymousFunction(){
    return function () {
        console.log("booo")
    };
};