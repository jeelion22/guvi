function foo(...rest) {
    let total = 0 ;
    for (let num of rest) {
    total += num}
    
    return total ;
    }
    
    console.log(foo(1, 2))