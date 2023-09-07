const express = require("express")
const request = require("request")
const router = express.Router()

const {getStatus} = require("../controllers/user")


router.get("/",getStatus)
router.post("/", (req, res) => {
    res.send("running post")
})

router.use("*", (req, res) => {
    res.status(404).json({
        errors: {
            msg: "URL_NOT_FOUND",
        },
    });
});


module.exports = router