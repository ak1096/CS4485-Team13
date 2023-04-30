const express = require('express');
const router = express.Router();
const Tutor = require('../models/tutor.model');

router.get('/', async (req, res) => {
  try {
    const tutors = await Tutor.find({});
    res.json(tutors);
    console.log(tutors);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

router.get('/:tutorid', async (req, res) => {
    try {
      const { id } = req.params;
      const tutor = await Tutor.findById(id);
      if (!tutor) {
        return res.status(404).json({ message: 'Tutor not found' });
      }
      return res.json(tutor);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  });

module.exports = router;