function filter(arr,string) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(string) !== -1) {
            result.push(arr[i]);
        }
    }
    return result;
}
let input = prompt("Nhap them phan tu vao mang (cach nhau boi dau phay): ");
let array = input.split(",");
let stringInput = prompt("Nhap vao chuoi ");
let result = filter(array,stringInput);
console.log(result);