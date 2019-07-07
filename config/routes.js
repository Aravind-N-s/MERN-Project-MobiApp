const express = require('express')
const router = express.Router()
const productController = require('../app/controller/productController')
const specificationController = require('../app/controller/specificationController')
const userController = require('../app/controller/userController')
const compareController = require('../app/controller/compareController')
const authenticationUser = require('../app/middleware/authenticationUser')
const brandController = require('../app/controller/brandController')

router.get('/products',productController.list)
router.post('/products',productController.create)
router.get('/products/:id', productController.show)
router.put('/products/:id',productController.update)
router.delete('/products/:id',productController.destroy)

router.get('/specifications', specificationController.list)
router.post('/specifications', specificationController.create)
router.get('/specifications/:id', specificationController.show)
router.put('/specifications/:id', specificationController.update)
router.delete('/specifications/:id', specificationController.destroy)

router.get('/brands', brandController.list)
router.post('/brands', brandController.create)

router.post('/users/register',userController.register)
router.post('/users/login',userController.login)
router.delete('/users/logout',authenticationUser,userController.logout)
router.get('/users/account',userController.account)


module.exports = router