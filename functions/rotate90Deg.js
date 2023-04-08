export default function rotate90Deg(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;

    const rotated = Array(m)
        .fill(0)
        .map(() => Array(n).fill(""));

    for (let row = 0; row < n; row++) {
        const rotatedCol = n - 1 - row;
        for (let col = 0; col < m; col++) {
            const rotatedRow = col;
            rotated[rotatedRow][rotatedCol] = matrix[row][col];
        }
    }

    return rotated;
}
