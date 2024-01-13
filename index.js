const express = require('express')
const cors = require("cors");

require('./db/config');

const User = require('./db/users');
const app = express();
// we have to take data from react.js (front-end)
// so we will use middleware(json of express) for it 

app.use(express.json());
app.use(cors());

//making route
//we have to make callback fuction async because it returns a promise

app.post("/signup", async(req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    res.send(result);

})



app.listen(3000);