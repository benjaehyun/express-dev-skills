const express = require('express')
const router = express.Router() 
const skillsCtrl = require('../controllers/skills')

/* GET users listing. */
router.get('/', skillsCtrl.index);
router.get('/:confidence', skillsCtrl.show);

  
module.exports = router;
  