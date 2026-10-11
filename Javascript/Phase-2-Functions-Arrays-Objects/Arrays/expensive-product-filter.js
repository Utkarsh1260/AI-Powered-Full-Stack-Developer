let prices = [100, 250, 500, 150, 700];

const price= prices.filter(isGreater);


function isGreater(prices){
    return prices>300
};

console.log(`The premium products are = ${price}`);
// console.log(price);



// or

preProduct=prices.filter((price)=>price>300);
console.log(preProduct);

