function countCharacter(string){
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            count++;
        }
    }
    return count;
}
let input = prompt("Nhap vao 1 chuoi :");
let count = countCharacter(input);
console.log(count);