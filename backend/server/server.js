//back-end just test
const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
    const users = [{ name: 'John', age: 30 }, { name: 'Samantha', age: 25 }];
    res.json(users);
});

const port = 8887;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});