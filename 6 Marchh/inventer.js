let obj1={
    itemName:"Mobile",
    USD:159.99
}
let obj2={
    itemName:"Tablat",
    USD:259.99
}
let obj3={
    itemName:"Laptop",
    USD:355.99
}
let obj4={
    itemName:"AC",
    USD:295.99
}
let obj5={
    itemName:"Frize",
    USD:129.99
}
let arr=[]
let ITEMS=arr.push(obj1,obj2,obj3,obj4,obj5)
console.log(arr);
let pricesINRS=arr.forEach((RS)=>{
    let IndianRS=RS.USD*80
    console.log("Price in Rs.",IndianRS)
})