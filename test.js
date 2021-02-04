// Get dataset & assign to variable
const cityPopulation = cbs_data;

// Show Amsterdam population 2020
console.log(cityPopulation[2]);

show2020(cityPopulation, 2018);

function show2020(data, year) {

    let mostRecentPopList = data.filter(function (currentValue, index) {
        console.log('CurrentValue: '+ currentValue.Perioden);
        return currentValue.Perioden === year;
    });

    console.log("De gefilterde lijst: ", mostRecentPopList);

}