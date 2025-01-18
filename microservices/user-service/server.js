const express = require("express");
const app = express();
const port = 5000;

// Sample users data
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

// API Endpoint
app.get("/users", (req, res) => {
    res.json(users);
});

// Start server
app.listen(port, () => {
    console.log(`User Service running on port ${port}`);
});
