// backend/routes/courses.js
const express = require('express');
const Course = require('../models/Course');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

// Create Course
router.post('/', authMiddleware, async (req, res) => {
  const { title, description } = req.body;
  const instructorId = req.user.id;
  try {
    const newCourse = new Course({ title, description, instructor: instructorId });
    await newCourse.save();
    res.status(201).json({ message: 'Course created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Approve Course
router.put('/:id/approve', authMiddleware, async (req, res) => {
  const courseId = req.params.id;
  try {
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ error: 'Course not found' });
    course.status = 'Approved';
    await course.save();
    res.json({ message: 'Course approved successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Courses
router.get('/', async (req, res) => {
  try {
    const { status } = req.query;
    let courses;
    if (status) {
      courses = await Course.find({ status });
    } else {
      courses = await Course.find();
    }
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
