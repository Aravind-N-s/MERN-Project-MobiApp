const express = require('express')
const router = express.Router()
const productController = require('../app/controller/productController')
const specificationController = require('../app/controller/specificationController')
const userController = require('../app/controller/userController')
const compareController = require('../app/controller/compareController')
const {authenticationUser} = require('../app/middleware/authenticationUser')
const brandController = require('../app/controller/brandController')
const reviewController = require('../app/controller/reviewController')
const addressController = require('../app/controller/addressController')
const commentController = require('../app/controller/commentController')

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
// router.put('/brands/:id',brandController.update)
// router.delete('/brands/:id',brandController.destroy)

router.post('/users/register',userController.register)
router.post('/users/login',userController.login)
router.delete('/users/logout',authenticateUser,userController.logout)
router.get('/users/account', authenticationUser, userController.account)

router.get('/addressess', authenticationUser, addressController.list)
router.post('/addressess', authenticationUser, addressController.create)
router.get('/addressess/:id', authenticationUser, addressController.show)
router.put('/addressess/:id', authenticationUser, addressController.update)
router.delete('/addressess/:id', authenticationUser, addressController.destroy)

router.get('/reviews', reviewController.list)
router.post('/reviews', authenticationUser, reviewController.create)
router.get('/reviews/:id', reviewController.show)
router.put('/reviews/:id', authenticationUser, reviewController.update)
router.delete('/reviews/:id', authenticationUser, reviewController.destroy)

router.get('/comments', commentController.list)
router.post('/comments', authenticationUser, commentController.create)


module.exports = router