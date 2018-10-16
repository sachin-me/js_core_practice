//1. Write a function, `AnimalTestUser`, that has one string parameter, `username`. It returns an object with a username property.

function AnimalTestUser(username) {
    let user = {};
    user.username = username;
    return user;
} 

//In your AnimalTestUser function, create a check that sees how many arguments are passed. If there is more than one argument, create a property, otherArgs that is an array of the remaining arguments. Note: the arguments keyword is not a true array. Remember, it is an array-like object.

function AnimalTestUser(username, check) {
    let user = {};
    user.username = username;
    return user;
    if(user != null) {
        user.otherArgs = [];
        user.otherArgs.push("mickey");
    }
} 

//Write a constructor function, AnimalCreator that returns a single animal object. The constructor function has 4 parameters: username, species, tagline, and noises. The animal object should have at least 5 properties: username, species, noises, tagline, and friends. The values should all be strings except noises and friends, which are arrays.

function AnimalCreator(username, species, tagline, noises, friends) {
    let user = {};
    user.username = username;
    user.species = species;
    user.tagline = tagline;
    user.noises = noises;
    user.friends = friends;

    return user;
}

console.log(AnimalCreator("mickey", "virus", "count on me", ["chewchew", "bawwww"], ["none"]));