// Only change code below this line
function countdown(n){
    if (n <= 0) return [];
    else {
        return [n].concat(countdown(n - 1));
    }
}
// Only change code above this line

console.log(countdown(5));