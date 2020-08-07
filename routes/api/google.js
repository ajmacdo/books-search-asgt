const router = require("express").Router();

const googleController = require("../../controllers/googleController");
//calling methods coded on bksCtrlr on this page

//routes..
//.get....
router.get("/", function(req, res) {
    googleController.findAll().then(searchedBooks => {
        res.send(searchedBooks);
    })
});


module.exports = router;