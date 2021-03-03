const routes = require ("express").Router();
const userController = require("../controllers/user.controller");

routes.post('/signup', userController.userRegister);
routes.post('/signin', userController.userLogin);
routes.get('/getAll', userController.getAllUser);




module.exports = routes;