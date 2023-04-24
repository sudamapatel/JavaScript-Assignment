function maxAndminValue(){
    let Max=Math.max(5,8,9,22,56,78)
    let Min=Math.min(5,8,9,22,56,78)
    return obj={
        MaxValue:Max,
        MinValue:Min
    }
}
let a=[5,8,9,22,56,78]
console.log(maxAndminValue(...a))