//Write a function that checks if a given object contains a given property
//var obj  = …;
//var hasProp = hasProperty(obj,"length");

function hasProperty(obj, prpt) {
    for (var i in obj) {
        if (i == prpt) {
            return true;
        }
    }
    return false;
}

var test = {
    aveEi: 5,
    babaYaga: 7,
    c: 9
}

var hasPropertyOf = hasProperty(test, "babaYaga");
document.write(hasPropertyOf);
