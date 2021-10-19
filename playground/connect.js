//add()(10,20)

function add(){
    return function(n,m){
        return n+m
    }
}

console.log(add()(10,20));
