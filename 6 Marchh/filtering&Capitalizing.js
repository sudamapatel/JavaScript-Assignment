let obj1={
    Book:"Ramayna",
    Author:"Tulsidas",
    PublishYear:1987
}
let obj2={
    Book:"Mahabharat",
    Author:"Ved Vyash",
    PublishYear:1999
}
let obj3={
    Book:"Gita",
    Author:"Krishna",
    PublishYear:2010
}
let obj4={
    Book:"Rashmirathi",
    Author:"Ramdhari Singh Dinkar",
    PublishYear:1952
}
let obj5={
    Book:"Panchvati",
    Author:"Maithilisharan Gupt",
    PublishYear:2015
}
let arr=[];
arr.push(obj1,obj2,obj3,obj4,obj5);
console.log("Book Details",arr);
//books which published before 2010
let filterYear=arr.filter(element=>element.PublishYear<2010);
console.log("books which published before 2010",filterYear);
//Author name in Uppercase
let author=filterYear.map(upperAuthor=>upperAuthor.Author.toUpperCase());
console.log(author);