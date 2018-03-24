var directionApi = require('./Api/Direction/DirectionApi');

var printDirectionData = (origin, destination, mode) => {
	directionApi.getDirectionData(origin, destination, mode)
	.then((res) => {
		console.log(mode);
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});
} 

printDirectionData('Warszawa, Dworzec centralny', 'Warszawa, Rynek Starego Miasta', 'transit');
printDirectionData('Warszawa, Dworzec centralny', 'Warszawa, Rynek Starego Miasta', 'driving');
printDirectionData('Warszawa, Dworzec centralny', 'Warszawa, Rynek Starego Miasta', 'walking');
printDirectionData('Warszawa, Dworzec centralny', 'Warszawa, Rynek Starego Miasta', 'bicycling');