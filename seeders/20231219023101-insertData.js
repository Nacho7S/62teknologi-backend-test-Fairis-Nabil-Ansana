'use strict';

const { default: axios } = require('axios');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const urls = "https://api.yelp.com/v3/businesses/search?location=NYC&attributes=&sort_by=best_match&device_platform=android&limit=50"
    const headers = {
      'Authorization': 'Bearer Ubf1-f0uqsJUnssqPMGo-tiFeZTT85oFmKfznlPmjDtX8s83jYMoAb-ApuD63wgq6LDZNsUXG6gurZIVYaj2jzxJmmLdCdXbDqIHU_b6KiCEVi8v-YB0OSsW6MWaY3Yx',
      'content-type': "application/json"
    }
    const { data } = await axios.get(urls, { headers })
    // console.log(data);
    const mappedData = data.businesses.map((el) => {
      return {
        id: el.id,
        alias: el.alias,
        name: el.name,
        image_url: el.image_url,
        is_closed: el.is_closed,
        url: el.url,
        review_count: el.review_count,
        categories: JSON.stringify(el.categories),
        rating: el.rating,
        coordinates: JSON.stringify(el.coordinates),
        transactions: JSON.stringify(el.transactions),
        price: el.price,
        location: JSON.stringify(el.location),
        phone: el.phone,
        display_phone: el.phone,
        distance: el.distance ? parseFloat(el.distance) : null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    await queryInterface.bulkInsert('Businesses', mappedData, {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Businesses', null, {})

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
