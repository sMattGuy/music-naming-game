const express = require('express');
const router = express.Router();

// POST Create user
router.post('/register', async (req, res) => {
    res.status(201).json(req.body);
});

//POST Login User
router.post('/login', async (req, res) => {
    res.status(201).json('blah');
});

//GET User Data
router.get('/', async (req, res) => {
    console.log(req.auth.token)
    res.status(201).send(res.data);
})

module.exports = router;