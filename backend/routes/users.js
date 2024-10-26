const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authJWT = require('../../middleware/app_api/authenticateJWT');

// CRUD routes for users
router.get('/', authJWT, userController.getAllUsers);
router.get('/:id', authJWT, userController.getUserById);
router.post('/', userController.createUser); // This could be used for registration
router.put('/:id', authJWT, userController.updateUser);
router.delete('/:id', authJWT, userController.deleteUser);

module.exports = router;

//FIXME!