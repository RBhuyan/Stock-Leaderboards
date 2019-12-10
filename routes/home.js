var express = require("express"),
    router = express.Router(),
    db = require("../models/queries");

router.get("/", function(req,res){
    res.render("homepage");
});
    
