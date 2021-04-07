require('dotenv').config();
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());
const PORT = 8080;
//  Data object
const posts = [
    {
        username: "jim",
        title: "post 1"
    },
    {
        username: "bongy",
        title: "post 2"
    }
];
app.get('/posts', authenticateToken, (req, res) => {

    res.json(posts.filter(p => p.username === req.user.name))
});

function authenticateToken(req, res, next) {
    const authheader = req.header("authorization")
    const token = authheader && authheader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) res.sendStatus(403)
        req.user = user;
        next()
    })
};
app.listen(PORT, () => console.log(`live on port ${PORT}`));