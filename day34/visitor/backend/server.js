const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());


app.post('/api/visitor', (req, res) => {
    const newData = req.body;
    fs.readFile('visitors.json', 'utf8', (err, data) => {
        let visitors = err ? [] : JSON.parse(data);
        visitors.push(newData);
        fs.writeFile('visitors.json', JSON.stringify(visitors, null, 2), (err) => {
            if (err) return res.status(500).send("Error saving data");
            res.status(201).json({ message: "Saved successfully!" });
        });
    });
});


app.get('/api/visitors', (req, res) => {
    fs.readFile('visitors.json', 'utf8', (err, data) => {
        if (err) {
            return res.json([]);
        }
        res.json(JSON.parse(data));
    });
});

app.listen(5000, () => console.log("http://localhost:5000"));