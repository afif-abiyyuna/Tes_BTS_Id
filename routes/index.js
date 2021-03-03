const routes = require ("express").Router();
const userRoutes = require ("./user.route");
const shoppingRoutes = require("./shopping.route");
const errorHandler = require ("../middlewares/errorHandler");


routes.use("/users", userRoutes);
routes.use("/shopping", shoppingRoutes);
routes.use(errorHandler);

module.exports = routes;