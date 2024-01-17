let a = prompt("Nhap vao a :");
let b = prompt("Nhap vao b :");
var array = [];
if (a > b) {
    var temp = a;
    a = b;
    b = temp;
}
for(let i = a ; i <= b ; i++){
    array.push(i);
} 
console.log(array);