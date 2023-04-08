import fs from "fs";
import { PNG } from "pngjs";

export default function pngToMatrix(pngPath) {
    // read the PNG image file
    const png = PNG.sync.read(fs.readFileSync(pngPath));

    // create a matrix with the same dimensions as the PNG image
    const matrix = new Array(png.width)
        .fill()
        .map(() => new Array(png.height).fill());

    // iterate over each pixel in the PNG image and add its [R,G,B] values to the matrix
    for (let x = 0; x < png.width; x++) {
        for (let y = 0; y < png.height; y++) {
            const idx = (png.width * y + x) << 2;
            const r = png.data[idx];
            const g = png.data[idx + 1];
            const b = png.data[idx + 2];
            matrix[x][y] = [r, g, b];
        }
    }

    return matrix;
}
