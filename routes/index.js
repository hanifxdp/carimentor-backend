const express = require('express');
const router = express.Router();
const mentorController = require('../controllers/MentorController');

router.get('/carimentor', mentorController.getMentors);
router.get('/carimentor/:id', mentorController.getMentors);

module.exports = router;