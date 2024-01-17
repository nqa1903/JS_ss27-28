let input = prompt("Nhap them phan tu vao mang (cach nhau boi dau phay): ");
let array = input.split(",");
for (let i = 0; i < array.length; i++) {
    array[i] = parseFloat(array[i]);
}
let min = array[0];
let max = array[0];
for(let i = 0 ; i < array.length ; i++){
    if(array[i] > max){
        max = array[i];
    }
    if(min > array[i]){
        min = array[i];
    }
}
console.log(`phan tu lon nhat ${max}`);
console.log(`phan tu nho nhat ${min}`);