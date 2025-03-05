const express = require('express')
const firmController = require('../controllers/firmController')
const verifyToken = require('../middlewares/verifyToken')

const router = express.Router()

router.post('/add-firm', verifyToken, firmController.addFirm)

router.get('/uploads/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    res.headersSent('Contenr-Type', 'image/jpeg');
    res.sendFile(Path2D.join(__dirname, '..', 'uploads', imageName))
})

router.delete('/:productId', firmController.deleteFirmById);


module.exports = router