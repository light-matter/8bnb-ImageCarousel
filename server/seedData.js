const faker = require('faker');
const {Carousel} = require('./db.js');
const seedData = (num) => {
  //Number of similar homes is between 5-10, with respective ids.
  var homeId = Math.floor(Math.random() * 5) + 5;

  //numberofBeds between 1-6. //Math.floor(Math.random() * (max-min)) + min
  var randomBeds = Math.floor(Math.random() * 5) + 1

  //formType(type is a reserved word in mongoose)
  var formTypes = ['Entire cottage, Entire apartment, Entire House, Private Room, Shared Room']
  var randomNumType = Math.floor(Math.random() * formTypes.length);
  var formType = formTypes[randomNumType];

  //body
  var body = faker.random.words();

  //price between 60-300
  var price = (Math.random() * 240 + 60).toFixed(2);

  //rating of home : 1 - 10
  var rating = Math.floor(Math.random() * 4) + 1;

  //num of Ratings = random number from 0 -1000
  var numOfRatings = Math.floor(Math.random() * 1000);

  //generate random int between 2 and 10
  var randImgNum = Math.floor(Math.random()*10) + 2;
  //image stores the number of images for each similar home
  var images = [];

  for(var j = 0; j < randImgNum; j++) {
    images.push(faker.image.image)
  }

  //Heart toggle either true of false
  var heart = Math.random() >= 0.5;

  //similarHomes = array of similarHome.
  var similarHomes= [];
  var similarHome = {
    homeId:  homeId,
    numberOfBeds: randomBeds,
    formType: formType,
    body: body,
    rating: rating,
    numberOfRatings: numOfRatings,
    images: images,
    heart: heart,
  }

  for(var k = 0; k < homeId; k++) {
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


  module.exports = {seedData}