let input = prompt("Nhap them phan tu vao mang (cach nhau boi dau phay): ");
let array = input.split(",");
for (let i = 0; i < array.length; i++) {
    array[i] = parseFloat(array[i]);
}
for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 1){
        array.splice(i, 1);
    }
}
console.log(array);