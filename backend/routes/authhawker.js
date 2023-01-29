const express = require('express');
const Hawker = require('../models/Hawker');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchhawker = require('../middleware/fetchhawker');
// const { default: HawkersList } = require('../../frontend/src/components/HawkersList');

const JWT_SECRET = 'Harryisagoodb$oy';

// ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required
router.post('/registerhawker', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    // Check whether the user with this email exists already
    let hawker = await Hawker.findOne({ email: req.body.email });
    if (hawker) {
      return res.status(400).json({ error: "Sorry a user with this email already exists" })
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    hawker = await Hawker.create({
      name: req.body.name,
      password: secPass,
      email: req.body.email,
    });
    const data = {
      hawker: {
        id: hawker.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);

// res.json({hawker})
    // res.json(user)
    res.json({ authtoken })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post('/loginhawker', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
], async (req, res) => {

  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let hawker = await Hawker.findOne({ email });
    if (!hawker) {
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }

    const passwordCompare = await bcrypt.compare(password, hawker.password);
    if (!passwordCompare) {
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }

    const data = {
      hawker: {
        id: hawker.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    res.json({ authtoken })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }


});


// ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
router.post('/getuser', fetchhawker, async (req, res) => {

  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})




// ROUTE 1: Get All the Notes using: GET "/api/notes/getuser". Login required
router.get('/fetchhawkers', async (req, res) => {
  try {
      // const hawker = await Hawker;
      // res.json(Hawker)
      const hawker=await Hawker.find({x:0})
      res.json(hawker)
      // Hawkers.map()
      console.log("Hi")
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})

module.exports = router