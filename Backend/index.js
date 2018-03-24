var ptApi = require('./Api/PublicTransport/publicTransportApi');

var printTransitData = (origin, destination) => {
	ptApi.getTransitData(origin, destination)
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});
} 

printTransitData('Warszawa, Dworzec centralny', 'Warszawa, Rynek Starego Miasta');