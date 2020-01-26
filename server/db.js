var mongoose = require('mongoose');
const faker = require('faker');
// const {seedData} = require('./seedData');
mongoose.connect('mongodb://localhost/homes', {useNewUrlParser: true, useUnifiedTopology:true});

//testing the connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Database Connected!");
});

var carouselSchema = mongoose.Schema({
  listingId: Number,
  homes: [{
      homeId:  Number, // Number for one of 10 similar homes, ids 1-10
      numberOfBeds: Number, //Number of beds
      formType: String, //type of home (ie entire cotttage, entire apartment)
      body: String, //Description of the similar home
      price: Number, //price per night
      rating: Number, //rating of the home
      numberOfRatings: Number, //number of ratings
      images: [String], //image array of home
      heart: Boolean, //favorite icon
  }]

});

var Carousel = mongoose.model('Carousel', carouselSchema);

const seedData = (num) => {

  //formType(type is a reserved word in mongoose)
  var formTypes = ['Entire cottage, Entire apartment, Entire House, Private Room, Shared Room']

  //image stores the number of images for each similar home
  var images = [];


  for(var j = 0; j < Math.floor(Math.random() * 5) + 5; j++) {
    //faker.image.imageUrl
    images.push('imagestring')
  }

  //Heart toggle either true of false
  var heart = Math.random() >= 0.5;

  //similarHomes = array of similarHome.
  var similarHomes= [];
  //10 similar homes
  for(var k = 0; k < 10; k++) {
    var similarHome = {
      homeId:  Math.floor(Math.random() * 5) + 5,
      numberOfBeds: Math.floor(Math.random() * 5) + 1,
      formType: formTypes[Math.floor(Math.random() * formTypes.length)],
      body: faker.random.words(),
      price: (Math.random() * 240 + 60).toFixed(2),
      rating: Math.floor(Math.random() * 4) + 1,
      numberOfRatings: Math.floor(Math.random() * 1000),
      images: images,
      heart: Math.random() >= 0.5,
    }

    similarHomes.push(similarHome);
  }

  for(var i = 0; i < num; i++) {
    const carousel = new Carousel({
      listingId: i,
      homes: similarHomes
    })
    carousel.save(err => {
      if(err) {
        console.log(err);
      } else {
        console.log('success');
      }
    })
  }

  }

  seedData(5);

//inserting data into the database
// var CarouselOne = new Carousel({
//   listingId: 1,
//   homes: [{
//           homeId:  1, // Number for one of 10 similar homes, ids 1-10
//           numberOfBeds: 3,
//           type: 'Entire Cottage
//           body: 'Room with a vue on the lake',
//           price: 72,
//           rating: 4.74,
//           numberOfRatings: 386,
//           images: ['image1', 'image2', 'image3'],
//           heart: true,
//   }]

// })

// CarouselOne.save();

// const createCarousels = (arr) => {
//   Carousel.create(arr, (err,carousels) => {
//     if(err) {
//       return console.log(err);
//     } else {
//       console.log(result, 'what is seedData?')
//     }
//   })
// }

// createCarousels(seedData(5));
// console.log(seedData(5), 'what is this?');

// Carousel.create(seedData(5));


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
//           homeId:  1,
//           numberOfBeds: 3,
//           type: 'Entire Cottage'
//           body: 'Room with a vue on the lake',
//           price: 72,
//           rating: 4.74,
//           numberOfRatings: 386,
//           images: ['image1', 'image2', 'image3'],
//           heart: true,
//   }]

// }