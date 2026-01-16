
const price = [10,20,30, 31, 223, 22343]; 

// map 
const taxedPrice = price.map((p) => {
    return p* 1.1; 
})

// console.log(price, taxedPrice);

// ffilter 
const fil = price.filter((p) => {
    return p >= 20; 
}); 
// console.log(fil);


// Reducer 
const red = price.reduce((acc , element) =>{
    return  acc + element; 
}, 5); // we can add the initial value here
// console.log(red);


//Map with reducer 
const map_red = price.reduce((acc, ele) => { 
    acc.push(ele * 2);
    return acc;  
}, []);
// console.log(map_red);  


// Fileter with reducer 
const fil_red = price.reduce((acc, ele) => { 
    if(ele % 2 === 0){
        acc.push(ele)
    };
    return acc;  
}, []);
// console.log(fil_red);


// task to return the sum of objects 
data = [{
    name: "P1", 
    price: 11,
    cat: "fruit"
}, {
    name: "P2", 
    price: 10,
    cat: "veg"
},{
    name: "P3", 
    price: 100,
    cat: "veg"
}]; 
const tot = data.reduce((acc, ele)=>{
    return acc + (ele.price * 0.9);
}, 0); 
// console.log(tot); 

//  task 2 group
const group_cat = data.reduce((acc, ele)=>{
    if(!acc[ele.cat]){
        acc[ele.cat] = []; 
    }acc[ele.cat].push(ele.name);
    return acc; 
}, {}); 

console.log(group_cat);