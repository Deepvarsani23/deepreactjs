// {
//     const list = [{
//         Car:{
//             Car1:{
//                 Model: "Verna",
//                 Price: "$140000",
//             },
//             Car2:{
//                 Model: "Thar",
//                 Price: "$391450",
//             },
//             Car3:{
//                 Model:  "Oudi",
//                 Price: "$328900",
//             },
//             Car4:{
//                 Model: "Swift",
//                 Price: "$109945",
//             },
//             Car5:{
//                 Model: "i20",
//                 Price: "$119500",
//             }
//         },
//         Mobile:{
//             Mobile1:{
//                 Model: "Mi",
//                 Price: "40000",
//             },
//             Mobile2:{
//                 Model: "Vivo",
//                 Price: "14000",
//             },
//             Mobile3:{
//                 Model: "Samsung",
//                 Price: "10000",
//             },
//             Mobile4:{
//                 Model: "oppo",
//                 Price: "80000",
//             },
//             Mobile5:{
//                 Model: "pixel",
//                 Price: "40000",
//             }
//         },
//         Tour:{
//             Tour1:{
//                 Name: "Mumbai",
//                 Price: "20000",
//             },
//             Tour2:{
//                 Name: "Rajasthan",
//                 Price: "23000",
//             },
//             Tour3:{
//                 Name: "Kerala",
//                 Price: "8000",
//             },
//             Tour4:{
//                 Name: "Goa",
//                 Price: "35000",
//             },
//             Tour5:{
//                 Name: "Vrindavan",
//                 Price: "12000",
//             }
//         },
//         Treak:{
//             Treak1:{
//                 Name: "Kedarkantha",
//                 Price: "18000",
//             },
//             Treak2:{
//                 Name: "Brahmatal",
//                 Price: "20000",
//             },
//             Treak3:{
//                 Name: "Hampta",
//                 Price: "13000",
//             },
//             Treak4:{
//                 Name: "Tarsar",
//                 Price: "8000",
//             },
//             Treak5:{
//                 Name: "NandaDevi",
//                 Price: "22000",
//             }
//         },
//         Bike:{
//             Bike1:{
//                 Model: "R15",
//                 Price: "$16640",
//             },
//             Bike2:{
//                 Model: "KTM",
//                 Price: "$12640",
//             },
//             Bike3:{
//                 Model: "Bullet",
//                 Price: "$11040",
//             },
//             Bike4:{
//                 Model: "Activa",
//                 Price: "$61990",
//             },
//             Bike5:{
//                 Model: "ola",
//                 Price: "$124400",
//             }
//         },
        
//     }]

//     const input = prompt("Enter The Car, Mobile, Tour, Treak, Bike  :  ");
    
//     if(input == "Car"){
//         console.log("Car:" ,list[0]["Car"]);
//     }
//     else if(input == "Mobile"){
//         console.log("Mobile",list[0]["Mobile"]);
//     }
//     else if(input == "Tour"){
//         console.log("Tour",list[0]["Tour"]);

//     }
//     else if(input == "Treak"){
//         console.log("Treak",list[0]["Treak"]);

//     }
//     else if(input == "Bike"){
//         console.log("Bike:",list[0]["Bike"]);

//     }
//     else{
//         console.log("Please! Refresh The Page and Enter Valid Input.");
//     }

// }




// <----------------------------------->


//  let numbers = [-20,-19,-12, -5, -1, 0, 1, 5, 12, 19, 20];

// let positive_array = numbers.filter(value => value >= 0);

// console.log(positive_array);





let list1 = [
    { Car1: "audi", price:"$140000", category: "car" },
    { Car2: "thar", price:"$91450", category: "car" },
    { Car3: "verna", price:"$328900", category: "car" },
    { Car4: "swift", price:"$109945", category: "car" },
    { Car5: "i20", price:"$119500", category: "car" },
    
    { Mobile1: "i phone", price:"$22900", category: "mobile" },
    { Mobile2: "Mi", price:"$4490", category: "mobile" },
    { Mobile3: "oppo", price:"$10900", category: "mobile" },
    { Mobile4: "Samsung", price:"$32900", category: "mobile" },
    { Mobile5: "Pixel", price:"$38900", category: "mobile" },
    
    { Bike1: "Bullet", price:"$23000", category: "bike" },
    { Bike2: "Activa", price:"$24000", category: "bike" },
    { Bike3: "ola", price:"$25000", category: "bike" },
    { Bike4: "Duke", price:"$38000", category: "bike" },
    { Bike5: "ktm", price:"$89000", category: "bike" },

    { Tour1: "Maharashtra", price:"$39", category: "tour" },
    { Tour2: "rajasthan", price:"$38", category: "tour" },
    { Tour3: "mumbai", price:"$89", category: "tour" },
    { Tour4: "Goa", price:"$29", category: "tour" },
    { Tour5: "Kerala", price:"$59", category: "tour" },

    { Treak1: "Kedarkantha", price:"$8700", category: "treak" },
    { Treak2: "Brahmatal", price:"$5600", category: "treak" },
    { Treak3: "Tarsar", price:"$4700", category: "treak" },
    { Treak4: "Nandadevi", price:"$3200", category: "treak" },
    { Treak5: "Hampta", price:"$2300", category: "treak" }
]; 

let output = prompt("Enter This Name Car Mobile, Tour, Treak, Bike: ");
let output1=  list1.filter(list1 => list1.category == output);

console.log(output1);