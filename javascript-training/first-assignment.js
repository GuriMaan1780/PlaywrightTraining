//first assignment of javascript
//first problem
let floatNum = 25.5;
console.log("Temperature of a city in degrees Celsius:", floatNum);

//second problem -Whether a customer has placed an order: true or false
let isorderPlaced = true;

if (isorderPlaced)
{
    console.log("customer has placed an order");
}
else
{
    console.log("customer has not placed an order");
}

//problem number 3 - Person's phone number: "123-456-7890"
let strPhoneNumber = "123-456-7890";
console.log("Person's phone number:", strPhoneNumber);

//problem number 4 - Amount of money in a customer's bank account: 1000.50 
let floatAmt = 1000.50;
console.log("Amount of money in a customer's bank account:", floatAmt);

//problem number 5 - Person's email address: "john.doe@example.com"  
let strEmail = "john.doe@example.com";
console.log("Person's email address:", strEmail);


//problem number 6 - Person's marital status: true or false 
let ismarital = true;

if (ismarital)
{
    console.log("Martial status is true");
}
else
{
    console.log("Martial status is false");
}

//problem number 7 - Person's occupation: "Software Engineer"
let stroccupation = "Software Engineer";
console.log("Person's occupation:", stroccupation );

//problem number 8 -Person's favourite colour: "Blue" 
let strFavClr = "Blue";
console.log("Person's favourite colour:", strFavClr);

//problem number 9 -Current year: 2023 " 
let currrentDate = new Date();

// get current year
console.log("Current Year:",currrentDate.getFullYear()-3); 

//problem number 10 -Rating of a movie: 7.5: 
let MovieRating = 7.5;
console.log("Rating of a movie:", MovieRating);

//problem number 11 -Person's blood type: 'A'  
let BloodType = 'A';
console.log("Person's blood type", BloodType);
console.log(typeof BloodType);

// ProblemCoordinates of a location (latitude, longitude): 37.7749, -122.4194

let location = {

    latitude: 37.7749,
    longitude: -122.4194,
};
console.log("Coordinates of a location empDetails",location.latitude, location.longitude); 


// ProblemCoordinates of a location (latitude, longitude): 37.7749, -122.4194

let personData = {
    phoneNumber: "123-456-7890",
    emailAddress: "john.doe@example.com",
    ismarital: true,
    occupation: "Software Engineer",
    favColor: "Blue",
    eyeColor: "Brown",
    bloodType: 'A',
    address: {
        birthPlace: "New York City",
        country: "United States"

    }


};
//Print employee name
console.log(personData.eyeColor); //output : Brown
//Print employee zip code
console.log(personData.address.birthPlace); //output : 14610
//Print entire employee details
console.log(personData);
