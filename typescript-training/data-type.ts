/*Data type are two different categories.
*Primitive data type and non- primitive data type*/

/* *****************************
*********PRIMITIVE DATATYPE******** */
//1.Number -number represent number with decimal and without decimal. 

let mark:number = 123; //number
let percentage : number = 95.5; //with decimal

console.log("Mark:",mark);
console.log("percentage :",percentage);

//2. String --> String represent text data. 

let str1 : string = "shiv" // double
let str2 : string = '123'// single
let str3 : string = `Kumar`// brackets

console.log("Name 1",str1);
console.log("Name 2",str2);
console.log("Name 3",str3);

//3. bolean 
let havingVisa :boolean = true;
let noVisa : boolean = false;

console.log("Passenger is having visa",havingVisa);
console.log("Passenger is not having visa",noVisa);

let empAddress : string|number|boolean;

empAddress = "Mohali"
console.log(empAddress);

empAddress = 123;
console.log(empAddress);

empAddress = true;
console.log(empAddress);

//undefined

let empSalary: undefined|number
console.log("Employess salary is not defined yer:",empSalary);

//4. Null
let empRole:null|string;
empRole = null;
empRole = "Developer";
console.log ("What are all the Employee role",empRole);

/**********************************
 * ***********NON-PRIMITIVE -DATATYPE********
 * ***************************************** */

//1.Array ---> array represent a colloection of similar data type.
let fruits :string [] = ["Apple","Banana", "Mango","Orange"];
console.log("Fruits are avaialble", fruits);

let fruitesPrice : number [] =[10, 20,30,40];
console.log("Fruits Price are",fruitesPrice);

let marketPrice :(string|number) [] = ["Apple",120,"Banana",60, "Mango",50, "Orange",70]
console.log("Market price of fruits are", marketPrice);
console.log(marketPrice[2],marketPrice[3]);

//2. Object --> Object represent a collection pf key - value pairs. 

interface empDetails1 {

    empId : number,
    empName:string,
    havingVisa:boolean,
    address: {
        city:string,
        zipcode :number,
        state :string,
        country :string

    }
}

let employeeInfo :empDetails1 ={
    empId: 101,
    empName: "Shiv",
    havingVisa: true,
    address:
    {
        city: "New York",
        zipcode : 14610,
        state: "Ny",
        country: "USA"
    }
};

console.log ("Employee Details :",employeeInfo.empName);
console.log("Employee City :", employeeInfo.address.city);

let address123 : [string,string,number,boolean] = ["74 Mohali Street", "Panjab", 12345, true];
console.log(address123);

//4. Function --> Function represent a block of code defined to perform a particular task.
// void represent a function that does not return any value ()
// if function returns any value, then same data type should be mentioned in the function defination. (firstname : string): string

function launchTheapplication (browserName : string, url: string):void {

    console.log("Launch the Browser: " + browserName);
    console.log("Navigate to URL" + url);
    console.log("Application Lanuched Sucessfully!");

};

function sumOfNumber (num1 : number, num2 : number): number {
    let num3 = num1 + num2;
    return num3;

}


function getFullName (firstName : string, lastNanme : string): string {

    let fullName : string = firstName + " " + lastNanme;
    return fullName;
}

launchTheapplication ("chrome", "https://matrix.ginilytics.org/");
console.log("Sum of numbers : ", sumOfNumber(10 , 20));
console.log("My Full Name is :", getFullName("SHIV", "KUMAR"));

//5.Map represent a collection of key value pairs where key can be of any data type.
let employeeMap: Map <string, string> = new Map ();
employeeMap.set ("empID", "101");
employeeMap.set ("empName", "Shiv");
employeeMap.set ("havingVisa", "true");
employeeMap.set ("empName", "Kumar");
employeeMap.delete ("havingVisa");

console.log("Employee Map", employeeMap);
console.log(employeeMap.size);

//6.Set

