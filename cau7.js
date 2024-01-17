function findX(arr, x) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (parseInt(arr[i]) + parseInt(arr[j]) === parseInt(x)) {
                return [parseInt(arr[i]), parseInt(arr[j])];
            }
        }
    }
    return null; 
}
let input = prompt("Nhap them phan tu vao mang (cach nhau boi dau phay): ");
let array = input.split(",");
let x = prompt("Nhap so nguyen x :");
let check = findX(array, x);
if(check){
    console.log(`Cap so co tong bang ${x} : ${check[0]} va ${check[1]}`);
}else{
    console.log(`Khong tim thay cap so co tong bang ${x}`);
}