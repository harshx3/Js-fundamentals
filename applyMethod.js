// apply method is same as callMethod but
// it just take arguments as arralist separated by commas

let nameDetails = {
    fName: "Harsh",
    lName: "Makwana",
}

let printFullNameWithHome = function (hometown, district) {
    console.log(`Hi, This is ${this.fName} ${this.lName} from ${hometown}, ${district} `);
}

printFullNameWithHome.apply(nameDetails, ["Kharod", "Mehsana"]);