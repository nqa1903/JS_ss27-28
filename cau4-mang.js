let input = prompt("Nhap them phan tu vao mang (cach nhau boi dau phay): ");
let array = input.split(",");
for (let i = 0; i < array.length; i++) {
    array[i] = parseFloat(array[i]);
}
let evenArray = [];
let oddArray = [];
for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
        evenArray.push(array[i]);
    }else{
        oddArray.push(array[i]);
    }
}
console.log(evenArray);
console.log(oddArray);