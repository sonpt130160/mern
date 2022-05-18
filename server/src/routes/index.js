const router = require("express").Router();

const todoRouter = require("./todoRouter");

router.use("/todos", todoRouter);
router.get("/", function(req, res){
    res.send("Hello World!");
 })

module.exports = router;
