const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
const {
  generateChit, getChits, getChit
} = require('../controllers/chit_controller');

router.post(
  '/api/chit/generate',
  [
    check('name', 'Please enter name')
      .isLength({ min: 2 })
      .withMessage('The name must be specified')
      .isAlpha()
      .withMessage('The name must contain only letters'),
    check('description', 'Please enter message')
      .isLength({ min: 8 })
      .withMessage('Message must be at least 8 characters')
  ],
  generateChit
);

router.get('/api/chit/', getChits);

router.get('/api/chit/:id', getChit);

module.exports = router;
