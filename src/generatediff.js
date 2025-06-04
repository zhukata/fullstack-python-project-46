import _ from "lodash"
import parse from "./parse.js"

const genDiff = (filepath1, filepath2, formatName='stylish') => {
    const diff = getDifferent(parse(filepath1), parse(filepath2))
    return diff
}

const getDifferent = (data1, data2) => {
    const listDiff = []
    const sortedKeys = _.sortBy(_.union([...Object.keys(data1), ...Object.keys(data2)]))
    const diff = sortedKeys.map((key) => {
        if (!_.has(data1, key)) {
        return `+ ${key}: ${data2[key]}`; // Ключ есть только во втором объекте
        }
        if (!_.has(data2, key)) {
        return `- ${key}: ${data1[key]}`; // Ключ есть только в первом объекте
        }
        if (!_.isEqual(data1[key], data2[key])) {
        return `- ${key}: ${data1[key]}\n+ ${key}: ${data2[key]}`; // Ключ есть в обоих, но значения отличаются
        }
        return `  ${key}: ${data1[key]}`; // Ключ есть в обоих, и значения совпадают
    });

    return `{\n${diff.join("\n")}\n}`;
};

export default genDiff