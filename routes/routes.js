const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
const {
  generateChit,
  getChits,
  getTodo
} = require('../controllers/chit_controller');

router.post('/api/chit/generate', generateChit);

router.get('/api/chit/', getChits);

router.get('/api/chit/:id', getTodo);

module.exports = router;
