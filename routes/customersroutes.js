const express = require('express'); 

const { registerUser, loginUser } = require('../controllers/customerscontroller');
const router = express.Router();
const verifyToken = require('../middleware/authmiddleware');
const { protectedRouteHandler } = require('../controllers/protectedController');

router.get('/protected-route', verifyToken, protectedRouteHandler);


router.post('/signup', registerUser);
router.get('/signin', loginUser);

module.exports = router;
