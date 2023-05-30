function calculateLength() {
    var lengthInput = Number(document.getElementById("lengthInput").value);
    if (confirmData(lengthInput)) {
        var fromUnit = document.getElementById("fromUnit").value;
        var toUnit = document.getElementById("toUnit").value;

        var lo = document.getElementById("lo");

        result = lengthConversion(lengthInput, fromUnit, toUnit);
        ;
        lo.value = result.toFixed(2);

    }
}

//function of lengthConversion()
function lengthConversion(lengthInput, fromUnit, toUnit) {
    lengthInput = Number(lengthInput);
    var ansmillimeter = 0;
    var makemillimeter = 0;
    var result;

    //coverting given unit to 
    switch (fromUnit) {
        case "millimeter":
            makemillimeter = 1;
            break;
        case "centimeter":
            makemillimeter = 10;
            break;
        case "meter":
            makemillimeter = 1000;
            break;
        case "kilometer":
            makemillimeter = 1000000;
            break;
        case "foot":
            makemillimeter = 304.8;
            break;
        case "inch":
            makemillimeter = 25.44;
            break;

    }

    ansmillimeter = lengthInput * makemillimeter;



    //converting millimeter value to the required unit
    switch (toUnit) {
        case "millimeter":
            result = ansmillimeter;
            break;
        case "centimeter":
            result = ansmillimeter / 10;
            break;
        case "meter":
            result = ansmillimeter / 1000;
            break;
        case "kilometer":
            result = ansmillimeter / 1000000;
            break;
        case "foot":
            result = ansmillimeter / 304.8;
            break;
        case "inch":
            result = ansmillimeter / 25.4;
            break;
    }
    return result;
}

//function to confirm the FormData

function confirmData(lengthInput) {
    if (lengthInput <= 0) {
        alert("Please Enter valid Length");
        return false;

    }
    return true;
}
