const express = require('express');
const router = express.Router();
const restaurantscontroller = require('../controllers/restaurantscontroller'); // Correct the file name

router.get('/select', restaurantscontroller.selectAll);
router.get('/:id', restaurantscontroller.insert);
router.post('/insert', restaurantscontroller.insert);
module.exports = router;
