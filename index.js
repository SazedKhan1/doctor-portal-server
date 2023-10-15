const express = require('express')
const cors = require('cors');
const port = process.env.PORT || 5000;

const app = express()

// middleware
app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
    res.send("Doctors portal running on the port")
})



app.listen(port, () => console.log(`Doctors portal server running on the port ${port}`))
