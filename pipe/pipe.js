export default function pipe(...args) {
    return (data) => args.reduce((currData, func) => func(currData), data);
}
