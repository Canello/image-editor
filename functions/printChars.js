export default function printChars(matrix) {
    for (let row of matrix) {
        console.log(row.join(""));
    }
}
