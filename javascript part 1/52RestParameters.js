// rest parameters 

function addAll(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total = total + number;
    }
    return total;
}
const ans = addAll(3, 4, 5, 6);
console.log(ans)