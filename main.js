console.log("JS is alive!");

// const studentData = getStudentData();
// console.log(studentData.data);

const stuData   = data;
// console.log(stuData);
// console.log(`Hele dataset: ${stuData}`);
// console.log(`Eerste dataset: ${stuData[0]}`);
// console.log("Eerste dataset: ", stuData[0]);
// console.log(`Eerste dataset schermtijd: ${stuData[0].schermtijdPerDagVolgensTelefoon}`);

// stringToIntegers(stuData);
let fullyFilledList     = emptyInputToIntegers(stuData);
let allIntegersList     = stringToIntegers(fullyFilledList);
getSkepticalInput(allIntegersList);




    //  Detect & remove empty fields & return a new dataList
    function emptyInputToIntegers(data) {

        let newDataList = [];

        data.forEach(function (value, index, all) {

            let giveInteger = 0;

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

        data.forEach(function (value, index, all){

            if(value <= 10 || value >= 1200){
                console.log("NIET GELDIG!");

                skepticalList.push(value);

            }

            newDataList.push(value);

        });

        newDataList.push(skepticalList);

        console.log("Full list with potential skeptical data: ", newDataList);
        return newDataList;

        // function getSchermtijdData(data) {
        //
        // let totalDataFound          = null;
        // let geenAntwoordCount       = null;
        // let geenGeldigAntwoordcount = null;
        //
        // data.forEach(function (value, index, all){
        //
        //     console.log(value.schermtijdPerDagVolgensTelefoon);
        //
        //     if(value.schermtijdPerDagVolgensTelefoon <= 10 || value.schermtijdPerDagVolgensTelefoon >= 1200){
        //         console.log("NIET GELDIG!");
        //         geenGeldigAntwoordcount++;
        //
        //         data.splice()
        //     }
        //     totalDataFound++;
        //
        // });


        // totalDataFound++;
        // console.log("Total data found: "+ totalDataFound);
        // console.log("Skeptical data found: "+ geenGeldigAntwoordcount);
        // console.log("Empty data found: "+ totalDataFound);

    }

    //  Convert string input to integers & return a new dataList
    function stringToIntegers(data) {

        let newDataList = [];

        data.forEach(function (value, index, all) {

            // let newInteger = parseInt(value.schermtijdPerDagVolgensTelefoon);
            let newInteger = parseInt(value);
            newDataList.push(newInteger);

        });

        console.log("All input fields stringToInteger list: ", newDataList);
        return newDataList;

    }
