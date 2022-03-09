const express = require('express');
const router = express.Router();

const People = require('../models/People')

router.get("/", async(_req, res) => {

  const people = await People.getAll();

  res.status(200).json(people);
})

module.exports = router;