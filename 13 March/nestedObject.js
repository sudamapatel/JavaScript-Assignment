function obj(){
    let person={
        Name:"Sandeep Patel",
        Age:20,
        Address:{
            Street:"Sankuiya Tahsil Hatta",
            City:"Damoh",
            State:"MadhyaPredesh"
        }
    }
    return person={
        Name:person.Name,
        Street:person.Address.Street
    }
    }
    console.log(obj());