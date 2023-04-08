export default function rgbToBrightness(rgbMatrix) {
    return rgbMatrix.map((row) =>
        row.map((rgb) => {
            const avg = Math.round((rgb[0] + rgb[1] + rgb[2]) / 3);
            return avg;
        })
    );
}
