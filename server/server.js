const express = require('express');
const app = express();

app.get("/api", (req, res) => {
    res.json({ "user": ["userOne","userTwo", "userThree"] });
})


app.listen(8880, () => {
    console.log("Server is running on port 8880");
})
