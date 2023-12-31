const express = require('express');
const router = express.Router();
const postsController = require('../controller/postsController');

//index
router.get('/', postsController.index);


//create
router.get('/create', postsController.create)

//show
router.get('/:slug', postsController.show)

//download foto
router.get('/:slug/download', postsController.downloadImage)



module.exports = router;