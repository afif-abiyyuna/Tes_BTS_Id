const express = require("express");
const app = express();
const mongooseConnection = require("./configs/mongoose.config");
const router = require("./routes/index");
const PORT = process.env.PORT || 3000;

mongooseConnection();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

app.listen(PORT, ()=>{
    console.log(`app run on http://localhost:${PORT}`);
});
