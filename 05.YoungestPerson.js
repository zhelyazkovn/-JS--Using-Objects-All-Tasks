//Write a function that finds the youngest person in a given array of persons and prints his/hers full name
//Each person have properties firstname, lastname and age, as shown:
//var persons = [
//{firstname : "Gosho", lastname: "Petrov", age: 32}, 
//{firstname : "Bay", lastname: "Ivan", age: 81},…];

function findYoungest(arr) {
    var youngestPersonPosition = 0;
    var youngestPersonAge = 200;

    for (var i in arr) {
        if (arr[i].age < youngestPersonAge) {
            youngestPersonAge = arr[i].age;
            youngestPersonPosition = i;
        }
    }

    document.write(arr[youngestPersonPosition].firstname + "</br>"
                  + arr[youngestPersonPosition].lastname + "</br>"
                  + arr[youngestPersonPosition].age + "</br>");
}

var persons = [
{firstname : "Gosho", lastname: "Petrov", age: 32}, 
{ firstname: "Bay", lastname: "Ivan", age: 81 },
{ firstname: "Zheko", lastname: "Junior", age: 1 }];

findYoungest(persons);
