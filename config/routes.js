const express = require('express')
const router = express.Router()

const authenticationUser = require("../app/middleware/authenticationUser")
const authenticateUser = require("../app/middleware/authenticateUser")

const productController = require('../app/controller/productController')
const specificationController = require('../app/controller/specificationController')
const userController = require('../app/controller/userController')
const compareController = require('../app/controller/compareController')
const {authenticationUser} = require('../app/middleware/authenticationUser')
const brandController = require('../app/controller/brandController')
const reviewController = require('../app/controller/reviewController')
const addressController = require('../app/controller/addressController')
const commentController = require('../app/controller/commentController')


router.get("/products", productController.list);
router.post("/products",authenticationUser,authenticateUser, productController.create);
router.get('/products/:id', productController.show)
router.put("/products/:id",authenticationUser,authenticateUser,productController.update);
router.delete("/products/:id",authenticationUser,authenticateUser,productController.destroy);

router.get('/specifications', specificationController.list)
router.post("/specifications",authenticationUser,authenticateUser, specificationController.create);
router.get('/specifications/:id', specificationController.show)
router.put('/specifications/:id',authenticationUser,authenticateUser, specificationController.update)
router.delete('/specifications/:id',authenticationUser,authenticateUser, specificationController.destroy)

router.get('/brands', brandController.list)
router.post('/brands', brandController.create)
// router.put('/brands/:id',brandController.update)
// router.delete('/brands/:id',brandController.destroy)

router.post('/users/register',userController.register)
router.post('/users/login',userController.login)
router.delete('/users/logout',authenticationUser,userController.logout)
router.get('/users/account', authenticationUser, userController.account)

router.get("/addressess", authenticationUser, addressController.list);
router.post('/addressess', authenticationUser, addressController.create)
router.get('/addressess/:id', authenticationUser, addressController.show)
router.put('/addressess/:id', authenticationUser, addressController.update)
router.delete('/addressess/:id', authenticationUser, addressController.destroy)

router.get('/reviews', reviewController.list)
router.post('/reviews', reviewController.create)
router.get('/reviews/:id', reviewController.show)
router.put('/reviews/:id', reviewController.update)
router.delete('/reviews/:id', reviewController.destroy)

router.get('/comments', commentController.list)
router.post('/comments', commentController.create)


module.exports = router