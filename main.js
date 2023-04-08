import pngToMatrix from "./functions/pngToMatrix.js";
import blackAndWhite from "./functions/blackAndWhite.js";
import matrixToPng from "./functions/matrixToPng.js";
import rgbToBrightness from "./functions/rgbToBrightness.js";
import brightnessToChars from "./functions/brightnessToChars.js";
import printChars from "./functions/printChars.js";
import rotate90Deg from "./functions/rotate90Deg.js";
import pipe from "./pipe/pipe.js";
import flipHorizontal from "./functions/flipHorizontal.js";

const imagePath = process.argv[2];
const p = pipe(
    pngToMatrix,
    rotate90Deg,
    flipHorizontal,
    rgbToBrightness,
    brightnessToChars,
    printChars
);
p(imagePath);
