const express = require('express');
const path = require('path');


const router = express.Router();

router.get("/", async(req,res,next)=>{
    var options = {
        root: path.join(__dirname, '../html')
      }
      res.sendFile('index.html', options);
});

module.exports = router;