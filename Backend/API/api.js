var api = () => {};
api.googleMapsClient = require('@google/maps').createClient({
		key: 'AIzaSyBAFqFmtK0vxuJ7UjLXiRLKXebSdR9n9nQ',
		Promise: Promise
	});

exports.api = api;