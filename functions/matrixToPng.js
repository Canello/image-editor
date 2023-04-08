import fs from "fs";
import { PNG } from "pngjs";

export default function matrixToPng(rgbMatrix) {
    const width = rgbMatrix.length;
    const height = rgbMatrix[0].length;

    // Create a new PNG instance with the specified width and height
    const png = new PNG({ width, height });

    // Set the pixel data of the PNG image from the array of RGB values
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = (width * y + x) << 2;
            const pixel = rgbMatrix[x][y];
            png.data[idx] = pixel[0];
            png.data[idx + 1] = pixel[1];
            png.data[idx + 2] = pixel[2];
            png.data[idx + 3] = 255; // Set the alpha channel to 255 (fully opaque)
        }
    }

    // Write the PNG image to a file
    png.pack().pipe(fs.createWriteStream("new-image.png"));
}
