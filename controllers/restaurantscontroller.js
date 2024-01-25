const asyncHandler = require('express-async-handler');
const restaurants  = require('../models').restaurants;
const restaurantscontroller = {
  selectAll: asyncHandler(async (req, res) => {
    try {
      const allrestaurants = await restaurants.findAll();
       res.status(200).json(allrestaurants);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error retrieving restaurants' });
    }
  }),

  insert: asyncHandler(async (req, res) => {
    try {
      const { name, image, location, cuisine_type } = req.body;

      // Create a new restaurant
      const newRestaurant = await restaurants.create({
        name,
        image,
        location,
        cuisine_type,
      });

      res.status(201).json({ message: 'Insert successful', restaurant: newRestaurant });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error during insertion' });
    }
  }),
};

module.exports = restaurantscontroller;