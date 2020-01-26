const faker = require('faker');
const mongoose = require('mongoose');
var {Carousel} = require('./db.js');


mongoose.connect('mongodb://localhost/homes');
// console.log('what is carousel', Carousel);

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
    var carousel = new Carousel({
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


  module.exports = {seedData}