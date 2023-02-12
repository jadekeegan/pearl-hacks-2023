const express = require('express');
const cors = require('cors');
const { Client } = require("pg");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/express_backend', (req, res) => { //Line 9
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
// });

app.post("/register", async (req, res) => {
    const user = req.body;
    email = user.email;
    password = user.password;

    (async () => {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        application_name: "$ kiwi"
    });

    try {
        await client.connect();
        //let result = await client.query("INSERT INTO profiles (email, password) VALUES ('" + email + "', '" + password + ')"');
        
        await client.end();
    } catch (err) {
        console.log(`error connecting: ${err}`);
    }

    })().catch((err) => console.log(err.stack));
});

app.listen(port, console.log(`Server is starting at ${port}`));