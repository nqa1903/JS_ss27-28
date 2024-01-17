function countCharacter(string, char) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            count++;
        }
    }
    return count;
}
let stringInput = prompt("Nhap vao chuoi ");
let charInput = prompt("Nhap vao ky tu: ");
let count = countCharacter(stringInput,charInput);
console.log(count);
