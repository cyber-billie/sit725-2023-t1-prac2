const express = require("express");
const res = require("express/lib/response");
const app = express();
const addTwoNumber = (n1, n2) => {
    return n1 + n2;
}
const subtractTwoNumber = (n1, n2) => {
    return n1 - n2;
}
const multiplyTwoNumber = (n1, n2) => {
    return n1 * n2;
}
const divideTwoNumber = (n1, n2) => {
    return n1 / n2;
}


/* 
//Addition
app.get("/add", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const result = addTwoNumber(n1, n2);
    res.json({ statuscocde: 200, data: result });
});

//Subtraction
app.get("/subtract", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const result = subtractTwoNumber(n1, n2);
    res.json({statuscocde: 200, data: result });
})

//Multiply
app.get("/multiply", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const result = multiplyTwoNumber(n1, n2);
    res.json({statuscocde: 200, data: result });
})

//Division
app.get("/divide", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const result = divideTwoNumber(n1, n2).toFixed(2);
    res.json({statuscocde: 200, data: result });
}) */


//Calculations
app.get("/calculate", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const add = addTwoNumber(n1, n2);
    const sub = subtractTwoNumber(n1, n2);
    const multiply = multiplyTwoNumber(n1, n2);
    const divide = divideTwoNumber(n1, n2).toFixed(2);
    res.json({
        statuscocde: 200,
        addition: add, 
        subtraction: sub, 
        multiplication: multiply, 
        division: divide 
    });
})


//console.log(addTwoNumber(19, 12));
const port = 3040;

app.listen(port, () => {
    console.log("hello i'm listening to port " + port);
})