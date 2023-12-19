const BusinessesController = require('../controllers/businessController')

const router = require('express').Router()


router.get('/', BusinessesController.fetchBusiness)
router.post('/', BusinessesController.addBusiness)
router.put('/:id', BusinessesController.editBusiness)
router.delete('/:id', BusinessesController.deleteBusiness)

module.exports = router