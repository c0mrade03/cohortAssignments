const { Router } = require("express");
const { Admin, Course } = require('../db');
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const value = await Admin.findOne({
        username: username
    })
    if (value) {
        res.status(403).json({
            msg: "Username already exists"
        })
    }
    else {
        await Admin.create({
            username: username,
            password: password
        })
        res.json({
            msg: "Admin created successfully"
        })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    // const value = await 
    const newCourse = await Course.create({
        title,
        description,
        price,
        imageLink
    })

    res.json({
        msg: "Course created successfully",
        courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courseList = await Course.find();
    res.json(
        {
            courses: courseList
        }
    );
});

module.exports = router;