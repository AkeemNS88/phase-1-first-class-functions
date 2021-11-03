function receivesAFunction (callback) {
    console.log(callback());
};

function returnsANamedFunction () {
    return function someMath(){ 1 + 1;}
};

function returnsAnAnonymousFunction() {
    return function () {2 + 2;}
};