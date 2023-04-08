export default function brightnessToChars(brightnessMatrix) {
    // chars from brightest to darkest
    const chars = [".", ",", "i", "-", "1", "t", "u", "0", "#", "$"];

    // mapping brightness values from 0-255 into chars
    const intervals = chars.map((char, i) =>
        Math.ceil((255 / chars.length) * (i + 1))
    );
    const valueChars = {};
    intervals.forEach((upperLimit, i) => {
        const lowerLimit = i === 0 ? 0 : intervals[i - 1] + 1;
        for (let num = lowerLimit; num <= upperLimit; num++) {
            valueChars[num] = chars[i];
        }
    });

    // generating matrix with chars
    return brightnessMatrix.map((row) =>
        row.map((brightness) => valueChars[brightness])
    );
}
