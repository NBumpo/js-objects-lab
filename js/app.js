// console.log("object lab")


// // keys, name, color, isReal, etc
// // values, "Big Foot", "Brown", true, etc
// let age;
// const bigFoot = {
//     name: 'Big Foot',
//     color: 'Brown',
//     isReal: true,
//     height: 7, // feet
//     diet: 'vegetarian',
//     woodlandFriends: [{name:'bunny', age: 4},{name: 'squirrel', age: 5},{name: 'deer'}],
//     eat(plant){ // new syntax on writing methods or objects
//         console.log(`Lets eat ${plant}`)
//     },
//     hide(location){
//         console.log(`Lets hide in the ${location} !`)
//     },
//     run(){

//     }
// }
// console.log(bigFoot.woodlandFriends[0].age)
// // run: function(){
// delete bigFoot.isReal
// //}

// bigFoot.hide("cavern")
// // I want to see if bigFoot is real
// // retrieve the value of the isReal key

// console.log(bigFoot.isReal)
// // Getting a property (Value)

// console.log(bigFoot.diet)

// // SET KEY VALUE PAIRS

// // Change the color of bigFoot
// bigFoot.color = 'strawberry blonde';
// console.log(bigFoot)

// bigFoot.diet = 'human'
// console.log(bigFoot.diet)

// console.log(bigFoot.woodlandFriends[2])

// function sayHello(name){
//     return `Hello, ${name}`
// }


// bigFoot.woodlandFriends.forEach(function(friend) {
//     console.log(sayHello(friend))
// })

// // to access objects values
// bigFoot.name // 'Big Foot'
// // or the bracket
// bigFoot['name'] // 'Big Foot'
// command /

const album1 = {
    title: 'Talking Heads',
    albumDetails: {
      released: new Date('September 16, 1977'),
      label: 'Sire',
      formats: ['LP']
    }
  };
  
  // Exercise 1:  Update the title property of album1 from 'Talking Heads' to 'Talking Heads - 77', then assign that property to a variable named title
  album1.title = 'Talking Heads - 77'
  const title = album1.title
  
  
  
  // Exercise 2: Assign the string 'Sire' from album1 to a variable named label
  const label = album1.albumDetails.label;
  console.log(label)


  
  
  const album2 = {
    title: 'More Songs About Buildings and Food',
    albumDetails: {
      released: new Date('July 14, 1978'),
      label: 'Sire',
      formats: ['LP', '8-track']
    }
  };
  
  const album3 = {
    title: 'Fear of Music',
    albumDetails: {
      released: 'August 3, 1979',
      label: 'Sire',
      formats: ['Cassette']
    }
  };
  
  // Exercise 3: Accessing the string 'LP' from album2's formats array, add it to the end of album3's formats array.
  
   album3.albumDetails.formats.push((album2.albumDetails.formats[0]))
  
  
  
  // Exercise 4:  Update the released property of album3 from a string into a Date object using that string
  
  
  
  
  const album4 = {
    title: 'Remain in Light',
    albumDetails: {
      released: new Date('October 8, 1980'),
      formats: ['Cassette', 'LP']
    }
  };
  
  // Exercise 5:  Add a property named label with the value 'Sire' to album4's albumDetails property
  album4.label = "Sire"
  
  
  
  const album5 = {
    title: 'Little Creatures',
    albumDetails: {
      released: new Date('June 10, 1985'),
      labels: ['Sire', 'emi'],
      formats: ['CD', 'cassette', 'LP']
    }
  };
  
  // Exercise 6:  Update the value 'emi' within album5's labels array to 'EMI'
  
  
  
  
  const album6 = {
    title: 'True Stories',
    albumDetails: {
      released: new Date('October 7, 1986'),
      labels: ['Sire, EMI'],
      formats: ['CD', 'cassette', 'LP']
    }
  };
  
  // Exercise 7:  Assign album6's formats array to a variable named formats
  
  
  
  
  const album7 = {
    title: 'Naked',
    albumDetails: {
      released: new Date('March 15, 1988'),
      labels: ['Sire', 'EMI'],
      formats: ['CD', 'cassette', 'LP']
    }
  };
  
  const talkingHeadsAlbums = [
    album1,
    album2,
    album3,
    album4,
    album5,
    album6,
    album7
  ];
  
  // Exercise 8:  Using the talkingHeadsAlbums array, assign album5's labels property to a variable named labels
  
  
  
  
  // Exercise 9:  Using the talkingHeadsAlbums array, assign album7's released property to album6's released property
  
  
  
  
  // Exercise 10:  Using the pre-defined variable named albumIdx below, assign the albumDetails object of the album located within the talkingHeadsAlbums array at the index represented by the value of albumIdx to a variable named albumDetails
  
  let albumIdx = 4;
  
  
  
  
  /********** Don't look below here **********/
console.log('=========================== Excercise console.logs =============')
console.log('Exercise 1:', title);
console.log('Exercise 2:', label);
console.log('Exercise 3:', album3.albumDetails.formats[1]);
//console.log('Exercise 4:', album3.albumDetails.released.toLocaleDateString());
 console.log('Exercise 5:', album4.albumDetails.label);
// console.log('Exercise 6:', album5.albumDetails.labels[1]);
// console.log('Exercise 7:', formats);
// console.log('Exercise 8:', labels);
// console.log('Exercise 9:', talkingHeadsAlbums[5].albumDetails.released.toLocaleDateString());
// console.log('Exercise 10:', albumDetails);
// console.log('===================================================================')