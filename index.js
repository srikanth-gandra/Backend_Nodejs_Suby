const express = require('express')
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const vendorRoutes = require('./routes/vendorRoutes')
const bodyParer = require('body-parser')
const firmRoutes = require('./routes/firmRoutes')
const productRoutes = require('./routes/productRoutes')
const path = require('path')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 7000;

dotEnv.config()
app.use(cors())
app.use(bodyParer.json())

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("mongoose connected successfully")
}).catch((err) => {
    console.log("server error", err);
})

app.use('/vendor', vendorRoutes)
app.use('/firm', firmRoutes)
app.use('/product', productRoutes)
app.use('/uploads', express.static('uploads'))

app.listen(PORT, () => {
    console.log(`server started and running ${PORT}`);
})

app.use('/', (req, res) => {
    res.send("<h1>Welcome to Suby</h1>")
})