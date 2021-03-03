const routes = require ("express").Router();
const shoppingController = require("../controllers/shopping.controller");
const authJwt = require("../middlewares/Auth");

routes.use(authJwt.verifyToken);
routes.post("/post", shoppingController.createShopping);
routes.get("/get", shoppingController.getAllShopping);
routes.get("/get/:shoppingId", shoppingController.getShoppingById);
routes.put("/update/:shoppingId", shoppingController.updateShopping);
routes.delete("/delete/:shoppingId", shoppingController.deleteShopping);


module.exports = routes;