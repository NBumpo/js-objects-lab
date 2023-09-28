console.log("object lab")


// keys, name, color, isReal, etc
// values, "Big Foot", "Brown", true, etc
let age;
const bigFoot = {
    name: 'Big Foot',
    color: 'Brown',
    isReal: true,
    height: 7, // feet
    diet: 'vegetarian',
    woodlandFriends: [{name:'bunny', age: 4},{name: 'squirrel', age: 5},{name: 'deer'}],
    eat(plant){ // new syntax on writing methods or objects
        console.log(`Lets eat ${plant}`)
    },
    hide(location){
        console.log(`Lets hide in the ${location} !`)
    },
    run(){

    }
}
console.log(bigFoot.woodlandFriends[0].age)
// run: function(){
delete bigFoot.isReal
//}

bigFoot.hide("cavern")
// I want to see if bigFoot is real
// retrieve the value of the isReal key

console.log(bigFoot.isReal)
// Getting a property (Value)

console.log(bigFoot.diet)

// SET KEY VALUE PAIRS

// Change the color of bigFoot
bigFoot.color = 'strawberry blonde';
console.log(bigFoot)

bigFoot.diet = 'human'
console.log(bigFoot.diet)

console.log(bigFoot.woodlandFriends[2])

function sayHello(name){
    return `Hello, ${name}`
}


bigFoot.woodlandFriends.forEach(function(friend) {
    console.log(sayHello(friend))
})

// to access objects values
bigFoot.name // 'Big Foot'
// or the bracket
bigFoot['name'] // 'Big Foot'