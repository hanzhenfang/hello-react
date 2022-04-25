const catagoryModel = require('../Schema/catagorySchema');
const express = require('express');
const router = express.Router();

router.get('/catagoryList', (request, response) => {
    const catagoryList = catagoryModel.find({}, (err, data) => {
        if (err) {
            console.log(err)
        }
        else {
            response.send(data)
        }
    });
})

const app = () => app.use(router)

export default app


