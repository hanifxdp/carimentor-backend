const express = require("express");
const router = express.Router();
const mentorController = require("../controllers/MentorController");

router.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        success: true,
        data: 'carimentor API is Running...'
    })
})


router.get("/carimentor", mentorController.getMentors);
router.get("/carimentor/:id", mentorController.getMentors);
router.get("/carimentor/category", mentorController.getCategory);
router.get("/carimentor/category:id", mentorController.getCategory);


module.exports = router;
