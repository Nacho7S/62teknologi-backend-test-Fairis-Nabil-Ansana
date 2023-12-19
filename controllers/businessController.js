
const { nanoid } = require('nanoid');
const { Business } = require("../models");
const { Op } = require('sequelize');
const getPriceSymbol = require('../helper/dollarSymbol');


class BusinessesController {
  static async fetchBusiness(req, res, next) {
    const { term, location, price, categories, limit } = req.query;
  
    try {
      let queryObj = { where: {} };
  
      if (term) {
        queryObj.where.name = { [Op.iLike]: `%${term}%` };
      }
  
      if (location) {
        queryObj.where.location = { [Op.iLike]: `%${location}%` };
      }
  
      if (price) {
        queryObj.where.price = getPriceSymbol(price) ;
      }
  
      if (categories) {
        queryObj.where.categories = { [Op.iLike]: `%${categories}%` };
      }
  
      console.log(queryObj);
      let limitDefault;
      if (!limit) {
        limitDefault = 10
      }

      const { count, rows } = await Business.findAndCountAll({
        where: queryObj.where, // Use where property directly
        limit: limit || limitDefault
      });
  
      const parsedBusinesses = rows.map((business) => ({
        ...business.dataValues,
        coordinates: JSON.parse(business.coordinates),
        categories: JSON.parse(business.categories),
        transactions: JSON.parse(business.transactions),
        location: JSON.parse(business.location),
      }));
  
      res.status(200).json({ business: parsedBusinesses, totalPages: Math.ceil(count / Number(limit || limitDefault)) });
    } catch (err) {
      console.log(err);
    }
  }

  static async addBusiness(req, res, next) {
    const { alias, name, image_url, is_closed, url, review_count, categories, rating, coordinates, transactions, price, location, phone, display_phone, distance} = req.body
    console.log(req.body);
    try {
      if (categories.length === 0) {
        throw {name: 'input invalid'}
      }
      if (coordinates.length === 0) {
        throw {name: 'input invalid'}
      }
      if (Object.keys(location).length === 0) {
        throw {name: 'input invalid'}
      }
      const addBusiness = await Business.create({
        id: nanoid(),
        alias,
        name,
        image_url,
        is_closed,
        url,
        review_count,
        categories: JSON.stringify(categories),
        rating,
        coordinates: JSON.stringify(coordinates),
        transactions: JSON.stringify(transactions),
        price,
        location: JSON.stringify(location),
        phone,
        display_phone,
        distance,
      })
      res.status(201).json({message: "success add a business"})
    } catch (err) {
      if (err.name === 'input invalid') {
        res.status(400).json({error: "input invalid"})
      }
      console.log(err);
    }
  }

  static async editBusiness(req, res, next) {
    const {id} = req.params
    const { alias, name, image_url, is_closed, url, review_count, categories, rating, coordinates, transactions, price, location, phone, display_phone, distance} = req.body
    try {
      if (!id) {
        throw {name: "notFound"}
      }
      if (categories.length === 0) {
        throw {name: 'input invalid'}
      }
      if (coordinates.length === 0) {
        throw {name: 'input invalid'}
      }
      if (Object.keys(location).length === 0) {
        throw {name: 'input invalid'}
      }
      const updateBusiness = await Business.update({
        alias,
        name,
        image_url,
        is_closed,
        url,
        review_count,
        categories: JSON.stringify(categories),
        rating,
        coordinates: JSON.stringify(coordinates),
        transactions: JSON.stringify(transactions),
        price,
        location: JSON.stringify(location),
        phone,
        display_phone,
        distance,
      }, { where: { id: id } })
      if (!updateBusiness) {
        throw {name: "notFound"}
      }
      res.status(200).json({message: "success update a business"})
    } catch (err) {
      if (err.name === "notFound") {
        res.status(404).json({message: "error not found"})
      }
      if (err.name === 'input invalid') {
        res.status(400).json({error: "input invalid"})
      }
      console.log(err);
    }
  }

  static async deleteBusiness(req, res, next) {
    const {id} = req.params
    try {
      if (!id) {
        throw {name: "notFound"}
      }
      const deleteBusiness = await Business.destroy({
        where: {
          id: id
        }
      })
      if (!deleteBusiness) {
        throw {name: "notFound"}
      }
      res.status(200).send({ message: "Successfully deleted the business."})
    } catch (err) {
      if (err.name === "notFound") {
        res.status(404).json({message: "error not found"})
      }
      console.log(err);
    }
  }
}

module.exports = BusinessesController