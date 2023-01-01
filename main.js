// /////////////////////EX0///////////////////
// ////////1
// let student = {
//     name: "Esther",
//     age: 28,
//     grade: 11,
//     classes: ["math", "english", "art"],
     
// };
// console.log(student.name);

// ////////2
// let book = {
//     title: "Ana" , 
//     author: "jams wind", 
//     year: 2018, 
//     genre: "fiction", 
//     publisher: "or", 
//     pages: 156, 
//     isbn: "text",
// };

// book.rating = 7.9
// console.log(book);

// ////////3
// const car = {
//     make: "Tesla",
//     model: "Model S",
//     year: 2020,
//     color: "Red",
//     features: ["Autopilot", "Ludicrous Mode", "Supercharging"]
//    };
// console.log(car.features[1]); 

// //////4
// let store= {
//     name: "fish",
//     location: "tel aviv", 
//     categories: ["sea","fruits", "fishes"],
//     products: {
//         one: {
//             name: "salomon",
//             price: 14,
//             quantity: 100,
//         }, 
//         two: {
//             name: "sushi",
//             price: 28,
//             quantity: 50,

//         }, 
//         three: {
//             name: "seafood",
//             price: 200,
//             quantity: 10,  
//         }
//     }
// };

// console.log(store.products);
// console.log(store.products.one);

// function nameOf(){
//     let a = store.products.one.price
//     let b = store.products.one.quantity
//     console.log(a*b);
// }
// nameOf()


// /////////////////////EX1///////////////////
// ////1
// function listOfProperties (age,height,weight) {
//     let person = {
//         age: age ,
//         height: height,
//         weight: weight,
//     }
//     console.log(person);
// }

// listOfProperties (18,1.73,65)

//  ////2
//  function lengthOfObject (arr) {
//     console.log(Object.keys(arr).length);
//  } 

//  lengthOfObject(car)

 ////3
 let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

//1
function displayGroceries () {
    console.log("client: " , groceries.fruits);
}
displayGroceries()
//2
function cloneGroceries () {
    let user = client;
    let shopping = groceries;
    shopping.totalPrice = "35$";
    shopping.other.paid = false;
    console.log("user: " , user);
    console.log("shopping" , shopping);
}
cloneGroceries()
//3
client = "betty"
console.log(client);
cloneGroceries()
//5
console.log(groceries);

///////////////////////EX2///////////////////
let book = [
    {title: "dog",
    author: "shir", 
    alreadyRead: false,
    },
    {title: "cat",
    author: "avi", 
    alreadyRead: false,
    },
    {title: "bird",
    author: "ben", 
    alreadyRead: true,
    },
]
///2
function books(arr) {
    for (i=0; i<3; i++) {
    console.log(arr[i].title + " " + "by" + " " + arr[i].author )  
    }
}
books(book);
///3
function books(arr) {
    for (i=0; i<3; i++) {
    if (arr[i].alreadyRead == true) {
        console.log("you already read" + " ," + arr[i].title + " " + "by" + " " + arr[i].author  );
    }  
    else {
        console.log("you still need to read" +" ," + arr[i].title + " " + "by" + " " + arr[i].author  );
    }  
    }
}
books(book);

///////////////////////EX3///////////////////
