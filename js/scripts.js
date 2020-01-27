//Back-end//

function Destination() {
	this.places = [];
	this.currentId = 0;
}

Destination.prototype.addPlace = function(place) {
	place.id = this.assignId();
	this.places.push(place);
}

Destination.prototype.assignId = function() {
	this.currentId +=1;
	return this.currentId;
}

Destination.prototype.findPlace = function(id) {
	for (var i = 0; i<this.places.length; i++) {
		if (this.places[i]) {
			if (this.places[i].id == id) {
				return this.places[i];
			}
		}
	};
	return false;
}

Destination.prototype.deletePlace = function(id) {
	for (var i = 0; i<this.places.length; i++) {
		if (this.places[i]) {
			if (this.places[i].id == id) {
				delete this.places[i];
			}
		}
	};
	return false;
}

// bussiness logig for places

function Place(country, city, year) {
	this.country = country;
	this.city = city;
	this.year = year;
}


// var destination = new Destination();
// var usa = new Place("USA",["Houston", "Portland"], 2006);
// destination.addPlace(usa);

// var japan = new Place("Japan",["Tokyo", "Osaka", "Kyoto"], 2020);
// destination.addPlace(japan);

// var turkey = new Place("Turkey",["Istanbul", "Ankara", "Kayseri"], 2015);
// destination.addPlace(turkey);


//User front-end//
var destination = new Destination();


$(document).ready(function() {
	$("form#new-place").submit(function(event) {
		event.preventDefault();
		var country = $("#country").val();
		var city = $("#city").val();
		var year = $("#year").val();

		var newplace = new Place(country, city, year);
		destination.addPlace(newplace);
		console.log(newplace);
			$(".result").append(newplace.city);
		// $(".result").show();
		
	});

});