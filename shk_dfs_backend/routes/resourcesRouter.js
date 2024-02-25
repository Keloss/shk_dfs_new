const Router = require('express')
const router = new Router()
const resourcesController = require('../controllers/resourcesController')

router.get('/getAll/:id', resourcesController.getAll)
router.get('/getSubSection', resourcesController.getSubSection)
router.post('/createSubSection', resourcesController.createSubSection)

module.exports = router