const prompt = require('prompt-sync')();
const searchString = prompt('Enter search string: ');
const products = [
    [1, 'hide and seek', 50, 20],
    [2, 'lays', 20, 80],
    [3, 'oreo', 40, 100],
    [4, 'parleG', 25, 0],
    [5, 'tiger', 20, 30],
    [6, 'unibic', 60, 20],
    [7, 'good day', 70, 20]
];

function searchProduct(searchString, products) {
    const result = [];

    for (let product of products) {
        if (product[1].includes(searchString)) {
            result.push(product[1]);
        }
    }

    return result.length > 0 ? result : "No products are available";
}
console.log("Output:", searchProduct(searchString, products));
