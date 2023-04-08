export default function blackAndWhite(rgbMatrix) {
    return rgbMatrix.map((row) =>
        row.map((rgb) => {
            const avg = (rgb[0] + rgb[1] + rgb[2]) / 3;
            return [avg, avg, avg];
        })
    );
}
