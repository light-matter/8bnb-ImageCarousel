var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/homes', {useNewUrlParser: true, useUnifiedTopology:true});

//testing the connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected!");
});

var carouselSchema = new mongoose.Schema({
  listingId: Number,
  homes: [{
      homeId:  Number, // Number for one of 10 similar homes, ids 1-10
      numberOfBeds: Number, //Number of beds
      type: String, //type of home (ie entire cotttage, entire apartment)
      body: String, //Description of the similar home
      price: Number, //price per night
      rating: Number, //rating of the home
      numberOfRatings: Number, //number of ratings
      images: [String], //image array of home
      heart: Boolean, //favorite icon
  }]

});

var Carousel = mongoose.model('Carousel', carouselSchema);

//inserting data into the database
// var CarouselOne = new Carousel({
//   listingId: 1,
//   homes: [{
//           homeId:  1, // Number for one of 10 similar homes, ids 1-10
//           numberOfBeds: 3,
//           body: 'Room with a vue on the lake',
//           price: 72,
//           rating: 4.74,
//           numberOfRatings: 386,
//           images: ['image1', 'image2', 'image3'],
//           heart: true,
//   }]

// })

// CarouselOne.save();


//Carousel.create()

const getHomes = (callback) => {
  Carousel.find((err,homes)=> {
    if(err) {
      callback(err);
    } else {
      console.log('--------');
      callback(null,homes);
    }
  })
}

module.exports = {getHomes}


// {
//   listingId: 1,
//   homes: [{
//           homeId:  1, // Number for one of 10 similar homes, ids 1-10
//           numberOfBeds: 3,
//           body: 'Room with a vue on the lake',
//           price: 72,
//           rating: 4.74,
//           numberOfRatings: 386,
//           images: ['image1', 'image2', 'image3'],
//           heart: true,
//   }]

// }