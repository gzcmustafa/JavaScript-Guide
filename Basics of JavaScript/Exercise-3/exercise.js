// Declare an empty array;
const arr = Array(); 
// Declare an array with more than 5 number of elements
const arr1 = [1,2,3,4,5,6,7];
// Find the length of your array
console.log(arr1.length);
// Get the first item, the middle item and the last item of the array
console.log("the firs item: " + arr1[0] + " the middle item: " + arr1[3] + " the last item: " + arr1[arr1.length-1])
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes= [1,2,5,"Hello","Word",[1,2,3,4]]
console.log(mixedDataTypes.length);
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon"
]
// Print the array using console.log()
console.log(itCompanies)
// Print the number of companies in the array
console.log(itCompanies.length);
// Print out each company
itCompanies.forEach(function(company){
    console.log(company);
})
// Change each company name to uppercase one by one and print them out
itCompanies.forEach(function(company){
    console.log(company.toUpperCase());
});
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const sentence = itCompanies.join();
console.log(`${sentence} are big IT companies`);

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

function checkCompanyExistence(companyName){
    if (itCompanies.includes(companyName)){
        return companyName + "exists int the array"
    }
    else{
        return companyName + "is not found in the array"
    }
}
console.log(checkCompanyExistence("baykar"));

// Filter out companies which have more than one 'o' without the filter method

const filteredCompanies = [];
for (let i=0; i< itCompanies.length; i++){
    let count=0;
    for (j=0; j<itCompanies[i].length; j++){
        if (itCompanies[i][j].toLowerCase() === `o`){
            count++;
        }
    }

    if ( count >= 2){
        filteredCompanies.push(itCompanies[i]);    
    }
    
}
console.log(filteredCompanies);

// Reverse the array using reverse() method
console.log(itCompanies.reverse());
// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3));
// Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3));
