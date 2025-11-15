import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send("hi i am alive")
})

app.get("/cpu", (req, res) => {
    for (let i = 0; i < 100000000; i++) {
        Math.random();
    }
    res.send("hello world");
})


app.listen(3000, () => {
    console.log("server is started")
})