const { Router } = require("express");
const router = Router();
const { User, Course } = require('../db');
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    await User.create({
        username,
        password
    })
    res.json({
        msg: "User created successfully"
    });
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courseList = await Course.find();
    res.json({
        courses: courseList
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    try {
        await User.updateOne({
            username: username
        }, {
            "$push": {
                purchasedCourses: courseId
            }
        })
    }
    catch (err) {
        console.log(err);
    }
    res.json({
        msg: "Purchase completed"
    })
});


router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const user = await User.findOne({
        username: username
    })
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })
    res.json(courses);
});

module.exports = router