function check(num) {
    if (num % 2 === 0) {
        return "Số chẵn";
    } else {
        return "Số lẻ";
    }
}
var a = prompt("Nhap vao so a :");
var b = prompt("Nhap vao so b :");
var c = prompt("Nhap vao so c :");
console.log(`${a} la: ${kiemTraChanLe(a)}`);
console.log(`${b} la: ${kiemTraChanLe(a)}`);
console.log(`${c} la: ${kiemTraChanLe(a)}`);