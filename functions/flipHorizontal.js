export default function flipHorizontal(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;

    const flipped = Array(n)
        .fill(0)
        .map(() => Array(m).fill(""));

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            const flippedCol = m - 1 - col;
            flipped[row][flippedCol] = matrix[row][col];
        }
    }

    return flipped;
}
