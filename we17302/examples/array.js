const products = ['product a', 'product b', 'product c', 'product d', 'product e'];

// for
console.log('For');
for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}

// for in
console.log('For in');
for (const index in products) {
    console.log(products[index]);
}

// for of
console.log('For of');
for (const item of products) {
    console.log(item);
}

//forEach
console.log('forEach');
products.forEach(function (item,index) {
    console.log(`${item} có index la ${index}`);
})

// Ví dụ show product sử dụng forEach
// const showProducts = () => {
//     let result = "";
//     productList.forEach((item) => {
//         result += `<div>${item.name}</div>`;
//     });
//     productListElement.innerHTML = result;
// };
// showProducts();

// map - method
const newProductList = productList.map((item) => {
    return `${item.name} + ahihi`;
});

// ví dụ show product sử dụng map
const showProducts = () => {
    productListElement.innerHTML = productList.map((item) => `<div>${item.name}</div>`).join("");
};