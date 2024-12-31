//bind method is different than call method as call method
// directly calls the function but rather than calling a function
//directly bind method will store it in a copy and then you can 
//invoke that copy anytime

let nameDetails = {
    fName: "Harsh",
    lName: "Makwana",
}

let printFullNameWithHome = function (hometown, district) {
    console.log(`Hi, This is ${this.fName} ${this.lName} from ${hometown}, ${district}`);
}

let printDetails = printFullNameWithHome.bind(nameDetails, "Kharod", "Mehsana");
console.log(printDetails);
printDetails();