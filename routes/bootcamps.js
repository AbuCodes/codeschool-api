const express = require('express');
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampsInRadius,
} = require('../controllers/bootcamps');

// Includ other resource routers
const courseRouter = require('./courses');

const router = express.Router();

// Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter); // If router has course /bootcampId/courses redirect on course router

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);

router.route('/').get(getBootcamps).post(createBootcamp);

router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
