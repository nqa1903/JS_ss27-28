function upperCase(string) {
    let arr = string.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let upperString = arr.join(" ");
    return upperString;
}
let stringInput = prompt("Nhap vao chuoi ");
let upperString = upperCase(stringInput);
console.log(upperString);