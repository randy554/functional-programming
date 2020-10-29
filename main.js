console.log("JS is alive!");

// Get dataset & assign to variable
const stuData   = data;

// console.log("Juiste Hele dataset: ", stuData);
// console.log("Eerste dataset2: ", stuData[0]);

// If any empty input, set it 0 en return the new list
let fullyFilledList     = emptyInputToIntegers(stuData);

// Set all string values to integers
let allIntegersList     = stringToIntegers(fullyFilledList);

// Check for strange values & append them to the list
// getSkepticalInput(allIntegersList);
filterGetSkepticalInput(allIntegersList);



    //  Detect & remove empty fields & return a new dataList
    function emptyInputToIntegers(data) {

        let newDataList = [];
        let giveInteger = 0;

        data.forEach(function (value) {

            if(value.schermtijdPerDagVolgensTelefoon.length === 0) {

                console.log(value.schermtijdPerDagVolgensTelefoon.length);
                newDataList.push(giveInteger);

            }else {

                newDataList.push(value.schermtijdPerDagVolgensTelefoon);
            }

        });

        console.log("No empty input fields list: ", newDataList);
        return newDataList;

    }

    //  Detect skeptical input & return a new dataList
    function getSkepticalInput(data) {

        let newDataList     = [];
        let skepticalList   = [];

        data.forEach(function (value){

            if(value <= 10 || value >= 1200){
                console.log("NIET GELDIG!");

                skepticalList.push(value);

            }

            newDataList.push(value);

        });

        newDataList.push(skepticalList);

        console.log("Full list with potential skeptical data: ", newDataList);
        return newDataList;

    }

    function filterGetSkepticalInput(data) {

        let filteredList    = data.filter(function (minuten) {

            return minuten <= 10 || minuten >= 1200;

        });

        console.log("ja: ", filteredList);

    }

    //  Convert string input to integers & return a new dataList
    function stringToIntegers(data) {

        let newDataList = [];

        data.forEach(function (value) {

            let newInteger = parseInt(value);
            newDataList.push(newInteger);

        });

        console.log("All input fields stringToInteger list: ", newDataList);
        return newDataList;

    }
