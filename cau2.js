function arrayMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > max.length) {
            max = arr[i];
        }
    }
    return max;
}
let input = prompt("Nhap them phan tu vao mang (cach nhau boi dau phay): ");
let array = input.split(",");
let max = arrayMax(array);
console.log(max);